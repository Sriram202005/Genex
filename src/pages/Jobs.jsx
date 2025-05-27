import React from 'react';
import banner from "../assets/jobs.jpg";
import fullstack from "../assets/full1.jpeg";
import aws from "../assets/aws.jpeg";
import devops from "../assets/dev.jpeg";

import j1 from "../assets/retail.jpg";
import j2 from "../assets/insurance.jpg";
import j3 from "../assets/ecom.avif";
import j4 from "../assets/informatic.png";
import j5 from "../assets/qlik.png";
import j6 from "../assets/logistics.jpg";
import j7 from "../assets/manu.jpg";
import j8 from "../assets/hive.png";
import j9 from "../assets/tableau.png";
import j10 from "../assets/cloudera.webp";
import j11 from "../assets/sap.png";
import j12 from "../assets/bank.webp";

import { FunctionalConsulting,TechnicalConsulting } from '../components/Consulting';


const Jobs = () => {
  return (
    <section className="bg-[#f9f9f9] pt-0 pb-16 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Banner */}
        <img
          src={banner}
          alt="GenexCorp Careers"
          className="w-full h-64 md:h-72 lg:h-80 object-cover mb-10 shadow-md"
        />

        {/* Job Listings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Open Positions</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[{
              title: "Full Stack Developer",
              image: fullstack,
              desc: "Looking for a 2–3 year experienced Full Stack Developer skilled in developing Payment, Messaging, Notification, and high-performance applications.",
            },
            {
              title: "AWS Cloud Engineer",
              image: aws,
              desc: "Looking for a 2–3 year experienced Cloud Engineer skilled in AWS Cloud Operations.",
            },
            {
              title: "DevOps Engineer",
              image: devops,
              desc: "Looking for a 2–3 year experienced DevOps Engineer.",
            }].map((job, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md flex-1 flex flex-col items-start text-sm">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-[150px] h-[100px] object-contain rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                <p className="text-gray-600 mb-1">
                  Start Date: <span className="font-medium">Immediate</span>
                </p>
                <p>{job.desc}</p>
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

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
          white-space: nowrap;
          animation-play-state: running;
        }
        .animate-scroll-left:hover,
        .animate-scroll-left.hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Jobs;
export { TechnicalConsulting, FunctionalConsulting };
