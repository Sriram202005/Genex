import React from 'react';
import ecommerceImg from '../assets/full1.jpeg';
import cloudImg from '../assets/aws.jpeg';
import devopsImg from '../assets/dev.jpeg';

import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

function ProductDevelopment() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-24">
      <h2 className="text-3xl  mb-8 text-center text-gray-800">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* E-Commerce */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <img src={ecommerceImg} alt="ECommerce" className="w-38 h-24 mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">ECommerce WebSites</h3>
          <p className="text-gray-600">
            We specialize in building ECommerce Websites, including Full Stack Solutions.
          </p>
        </div>

        {/* Cloud */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <img src={cloudImg} alt="Cloud Deployments" className="w-24 h-24 mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Cloud Deployments</h3>
          <p className="text-gray-600">
            We provide low-cost cloud solutions using AWS Services like Gateway, Twilio, RDS, Lambda, Glue, etc.
          </p>
        </div>

        {/* DevOps */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center">
          <img src={devopsImg} alt="DevOps" className="w-24 h-24 mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-700">DevOps Solutions</h3>
          <p className="text-gray-600">
            We help automate client processes and reduce operational costs using tailored DevOps solutions.
          </p>
        </div>
      </div>

      <TechnicalConsulting />
      <FunctionalConsulting />
    </div>
  );
}

export default ProductDevelopment;
