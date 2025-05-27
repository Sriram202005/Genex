import React, { useState } from 'react';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';
import {
  Activity,
  Settings,
  Layers,
  LayoutTemplate,
  Server,
  Bot,
  CloudLightning,
} from 'lucide-react';

const programsData = [
  {
    title: 'Splunk Development',
    description: 'Specialized / Real-Time Splunk Workshops and more.',
    details: [
      'Specialized / Real-Time Splunk Workshops',
      'Self Starter, Proactive, Ability to Google and YouTube',
      'Have an AWS Account (Free Tier)',
      'Basic knowledge of SPL commands and Admin Commands',
    ],
    icon: <Activity size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'DevOps Development',
    description: 'Jenkins, Docker, Kubernetes and more.',
    details: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub / GitActions / GitLab', 'Ansible'],
    icon: <Settings size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'FullStack Development',
    description: 'MERN, Python, MongoDB, FireStore.',
    details: ['MERN (MongoDB, ExpressJS, ReactJS, Node.js)', 'Python', 'MongoDB', 'FireStore'],
    icon: <Layers size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'Web Development',
    description: 'HTML/CSS, JavaScript, ReactJS, API, ExpressJS.',
    details: ['HTML/CSS', 'JavaScript', 'ReactJS', 'API', 'ExpressJS'],
    icon: <LayoutTemplate size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'ServiceNow Development',
    description: 'Tickets, REST API, Workflow.',
    details: ['Tickets', 'REST API', 'Workflow'],
    icon: <Server size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'ChatBot Development',
    description: 'Professional Bot, Azure, WebApp ChatBot, Channels Integration.',
    details: [
      'Professional Bot',
      'Have an Azure (Free Tier)',
      'WebApp ChatBot',
      'Channels Integration',
      'LUIS',
      'QnA Maker',
    ],
    icon: <Bot size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
  {
    title: 'AWS Development',
    description: 'CloudFront, S3 Bucket, EC2, IAM, Lambda, and more.',
    details: [
      'CloudFront',
      'S3 Bucket',
      'EC2',
      'UserData',
      'IAM',
      'Lambda',
      'API Gateway',
      'Developer Tools of AWS',
    ],
    icon: <CloudLightning size={48} className="text-red-400 group-hover:text-red-600 transition-colors" />,
  },
];

function TrainingPrograms() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 py-12 px-6 md:px-20 relative z-10 ">
      <h1 className="text-4xl font-bold mb-12 text-center  tracking-wide">
        Training / Internship Programs
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 ">
        {programsData.map((program, index) => (
          <div
            key={index}
            className="group relative border border-gray-200 rounded-lg p-6 cursor-pointer flex gap-6 transition-transform transform hover:scale-105 bg-white"
          >
            <div className="flex-shrink-0">{program.icon}</div>

            <div className="flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
              <p className="text-gray-600 mb-8">{program.description}</p>

              <a
                href="#"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`font-semibold no-underline ${
                  activeIndex === index ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Learn More »
              </a>

              {activeIndex === index && (
                <div
                  className="absolute z-50 bg-white shadow-xl rounded-md p-4 mt-2 left-6 right-6 text-gray-800 border border-gray-200"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <ul className="list-disc list-inside marker:text-red-600 space-y-1 text-sm">
                    {program.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-0 mt-20">
        <TechnicalConsulting />
        <FunctionalConsulting />
      </div>
    </div>
  );
}

export default TrainingPrograms;
