import React from 'react';
import { FunctionalConsulting,TechnicalConsulting } from '../components/Consulting';

function ITConsulting() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl  text-center text-gray-800 mt-15">IT Consulting</h1>

      <p className="text-lg text-gray-700 text-center mt-10 max-w-3xl mx-auto">
        Everyone that is part of <span className="font-semibold">GenexCorp</span> is passionate about how IT can help transform your business. 
        That’s why we work the way we do — and why we’re so successful at what we do.
      </p>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-red-400">Our Expertise Includes:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>DevOps Development</li>
          <li>Splunk Development</li>
          <li>FullStack Development</li>
          <li>Web Development</li>
          <li>ServiceNow Development</li>
          <li>ChatBot Development</li>
          <li>AWS Development</li>
        </ul>
      </div>
      <TechnicalConsulting/>
      <FunctionalConsulting/>
    </div>
  );
}

export default ITConsulting;
