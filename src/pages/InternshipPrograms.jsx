import React from 'react';
import {
  Cpu,
  Cloud,
  Code,
  Globe,
  MessageSquare,
  Server,
  Zap,
} from 'lucide-react';
import { TechnicalConsulting, FunctionalConsulting } from '../components/Consulting';

const internshipPrograms = [
  {
    title: 'Splunk Development',
    icon: <Cpu className="text-red-400 w-10 h-10" />,
    details: [
      'Specialized / Real Time Splunk Workshop',
      'Self Starter, Proactive, Ability to Google and YouTube',
      'Have an AWS Account (Free Tier)',
      'Basic Knowledge of SPL commands and Admin Commands',
    ],
  },
  {
    title: 'DevOps Development',
    icon: <Server className="text-red-400 w-10 h-10" />,
    details: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub / GitActions / GitLab', 'Ansible'],
  },
  {
    title: 'FullStack Development',
    icon: <Code className="text-red-400 w-10 h-10" />,
    details: ['MERN', 'Python', 'MongoDB', 'FireStore'],
  },
  {
    title: 'Web Development',
    icon: <Globe className="text-red-400 w-10 h-10" />,
    details: ['HTML/CSS', 'JavaScript', 'ReactJS', 'API', 'ExpressJS'],
  },
  {
    title: 'ServiceNow Development',
    icon: <Cloud className="text-red-400 w-10 h-10" />,
    details: ['Tickets', 'REST API', 'Workflow'],
  },
  {
    title: 'ChatBot Development',
    icon: <MessageSquare className="text-red-400 w-10 h-10" />,
    details: [
      'Professional Bot',
      'Azure (Free Tier)',
      'WebApp ChatBot',
      'Channels Integration',
      'LUIS',
      'QnA Maker',
    ],
  },
  {
    title: 'AWS Development',
    icon: <Zap className="text-red-400 w-10 h-10" />,
    details: [
      'CloudFront',
      'S3 Bucket',
      'EC2',
      'UserData',
      'IAM',
      'Lambda',
      'API Gateway',
      'AWS Developer Tools',
    ],
  },
];

export default function InternshipPrograms() {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-12">PROACTIVE Internships</h1>
        <p className="text-center text-gray-700 text-lg mb-12">
          Looking for PROACTIVE Interns who are willing to Learn and Contribute to these technologies with our Guidance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internshipPrograms.map((program, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                {program.icon}
                <h2 className="text-xl font-semibold text-gray-800">{program.title}</h2>
              </div>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                {program.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <TechnicalConsulting />
        <FunctionalConsulting />
      </div>
    </section>
  );
}
