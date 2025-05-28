import React, { useState } from 'react';
import banner from "../assets/jobs.jpg";
import fullstack from "../assets/full1.jpeg";
import aws from "../assets/aws.jpeg";
import devops from "../assets/dev.jpeg";
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

const jobData = [
  {
    title: "Full Stack Developer",
    image: fullstack,
    desc: "Looking for a 2–3 year experienced Full Stack Developer skilled in developing Payment, Messaging, Notification, and high-performance applications.",
    requirements: [
      "2+ years experience in MERN Stack",
      "Strong understanding of REST APIs",
      "Good debugging and testing skills"
    ],
    responsibilities: [
      "Develop scalable web applications",
      "Collaborate with UI/UX designers",
      "Maintain code quality and documentation"
    ]
  },
  {
    title: "AWS Cloud Engineer",
    image: aws,
    desc: "Looking for a 2–3 year experienced Cloud Engineer skilled in AWS Cloud Operations.",
    requirements: [
      "Hands-on AWS experience",
      "Good knowledge of IAM, EC2, and S3",
      "Experience with monitoring tools"
    ],
    responsibilities: [
      "Manage cloud resources",
      "Ensure security and backups",
      "Optimize cloud infrastructure"
    ]
  },
  {
    title: "DevOps Engineer",
    image: devops,
    desc: "Looking for a 2–3 year experienced DevOps Engineer.",
    requirements: [
      "Experience with CI/CD pipelines",
      "Familiarity with Docker and Kubernetes",
      "Knowledge of Git workflows"
    ],
    responsibilities: [
      "Implement CI/CD automation",
      "Collaborate with development teams",
      "Ensure high system reliability"
    ]
  },
];

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setTimeout(() => {
      setIsConfirmed(true);
    }, 500);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsConfirmed(false);
  };

  return (
    <section className="bg-[#f9f9f9] pt-0 pb-16 px-4 text-gray-800">
      <div className="w-full">

        <img
          src={banner}
          alt="GenexCorp Careers"
          className="hidden sm:block w-full h-[400px] object-cover mb-10 shadow-md"
        />
      </div>

      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <h2 className="text-3xl  text-center mb-10">Open Positions</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {jobData.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between text-sm flex-1 min-h-[400px]"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-[150px] object-contain rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold  mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-1">
                  Start Date: <span className="font-medium">Immediate</span>
                </p>
                <p className="mb-2">{job.desc}</p>

                <div className="mt-auto w-full flex justify-center">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="text-black hover:text-red-400 font-semibold"
                  >
                    Apply Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consulting Sections */}
        <div className="space-y-16">
          <TechnicalConsulting />
          <FunctionalConsulting />
        </div>
      </div>

      {/* Modal Popup */}
      {selectedJob && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            {!isConfirmed ? (
              <>
                <h2 className="text-xl font-bold mb-3">{selectedJob.title}</h2>
                <p className="text-sm mb-2">{selectedJob.desc}</p>

                <div className="mb-4">
                  <h3 className="font-semibold mb-1">Requirements:</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {selectedJob.requirements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-1">Responsibilities:</h3>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    {selectedJob.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleConfirm}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
                >
                  Confirm
                </button>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-xl font-bold text-green-600 mb-4">Sent Successfully 🎉</h2>
                <button
                  onClick={closeModal}
                  className="mt-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Jobs;
export { TechnicalConsulting, FunctionalConsulting };
