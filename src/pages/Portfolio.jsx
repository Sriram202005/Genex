import React from 'react';
import { TechnicalConsulting, FunctionalConsulting } from '../components/Consulting';
import portfolioImage from '../assets/ourobj.png'; 

function PortfolioSection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 py-12 px-6 md:px-20">
      <h1 className="text-4xl  mb-6 text-center text-black tracking-wide">PORTFOLIO</h1>

      {/* Highlighted Slogan */}
      <div className="bg-red-100 text-red-800 text-center py-6 px-4 my-10 rounded-lg shadow-md font-semibold text-xl md:text-2xl tracking-wide">
        For GenexCorp, “Welcome to possible of non-possibilities” is more than a slogan — it reflects our approach to every engagement.
      </div>

      {/* Main Content with Image on Right */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-10">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-lg mb-6 leading-relaxed">
            Our team includes a range of technical, functional, and business analyst specialists such as Business Blueprint (BPM) creators,
            Business Analysts (KPI designers), developers for specific tools, user interface designers, and support engineers. 
            We also have a very experienced team of IT consultants from different industry verticals who are just a call away. 
            They can understand your pain points, create effective solutions, and work seamlessly within your team to form a pleasant space 
            where all business jigsaws are solved effectively.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We aim to develop trusting and valued relationships with you. Our methods aren’t focused on us — they are focused on *you*. 
            We adopt a consultative, clear-thinking approach, taking the time to understand your business objectives before defining 
            the best-fit solutions tailored for your goals.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            We can work collaboratively with your internal IT/Functional/Business teams, external suppliers, and even with other IT providers 
            you currently engage with. Our consultants have a proven track record of creating strong strategic partnerships that help clients 
            get the most out of their IT investments.
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-shrink-0">
        <img
  src={portfolioImage}
  alt="Portfolio Visual"
  className="rounded-lg shadow-md max-w-full object-cover w-[500px] h-[320px]"
/>

        </div>
      </div>

      <TechnicalConsulting />
      <FunctionalConsulting />
    </div>
  );
}

export default PortfolioSection;
