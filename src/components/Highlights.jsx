import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import statImage from '../assets/stats.webp'; 

const Highlights = () => {
  const highlights = [
    "Self-service business intelligence for informed, innovative decisions",
    "Explore and create new associations in business data",
    "Combine data from multiple sources into a single, moldable unit",
    "Complete analysis using ERP, CRM, and data warehouses",
    "Collaborative tools for better decision-making with colleagues",
    "Data compression to save infrastructure resources",
    "No external database needed; ETL tool with proprietary central repository",
    "Role-based and AD-based security for distributed access",
    "Email distribution and PDF publishing via QV Publisher, PDF Distributor, N-Printing",
    "Embedded map object for enhanced geographic data visualization",
  ];

  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        
        {/* Left: Highlights aligned to top */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start space-y-4">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Highlights</h2>
          {highlights.map((point, index) => (
            <div key={index} className="flex items-start space-x-2">
              <HiArrowNarrowRight className="text-red-400 mt-1" />
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>

        {/* Right: Image vertically centered */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src={statImage}
            alt="Dashboard stats"
            className="rounded-xl shadow-md w-full max-w-md mt-20"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Highlights;
