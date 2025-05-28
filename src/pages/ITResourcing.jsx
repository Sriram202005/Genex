import React from 'react';
import { FunctionalConsulting, TechnicalConsulting } from '../components/Consulting';

function ITResourcing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl  mt-15 text-center text-gray-900">
        IT Resourcing
      </h1>
      
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        Everyone that is part of <strong>GenexCorp</strong> is passionate about how IT can help transform your business, which is why we work the way we do and why we are so successful at what we do.
      </p>
      
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        Our team includes a range of technical, functional, and business analyst specialists such as business blueprint (BPM) creators, Business Analysts (KPI designers), developers for specific tools, user interface designers, and support engineers. We also have a very experienced team of IT consultants from different industry verticals just one step away from your call to understand your pain points, create solutions, work within your team, and make it a pleasant space where all business jigsaws come into solvency.
      </p>
      
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        We want to develop trusting and valued relationships with you. Our methods aren’t focused on us, they are focused on you. We adopt a consultative, clear-thinking approach, taking the time to help understand your business objectives before we define the best solutions for you.
      </p>
      
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        We can work collaboratively with your internal IT / Functional / Business Drivers, any of your external suppliers, and even with any other IT providers you work with. Our consultants have a proven track record of creating strong strategic partnerships with their clients to help them make the most of their IT.
      </p>

      <div className="mt-12">
        <TechnicalConsulting />
        <FunctionalConsulting />
      </div>
    </div>
  );
}

export default ITResourcing;
