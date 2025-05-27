import React from 'react';
import ObjImage from '../assets/ourobj.png'; 

function Objective() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-8 text-red-400 text-center md:text-left tracking-wide">
            At GenexCorp, “Converting non-possibilities to possibilities” is more than a slogan - it reflects our approach to every engagement
          </h1>

          <section className="mb-10 space-y-6 text-lg leading-relaxed">
            <p>
              Some believe in the power of <strong>NUMBERS</strong>. Some believe in the power of <strong>TECHNOLOGY</strong>.
            </p>
            <p>
              We believe in the power of <strong>PEOPLE</strong>. We believe in the power of <strong>HUMAN TOUCH</strong>, that brings out the best talent, and the impact it can have on technology.
            </p>
            <p>
              Our roots grew from this belief that people with diverse points of view could come together and build a different kind of technology organization, one that puts <strong>HUMANS</strong> first. This belief drives our vision: to build technology experts who are focused on one goal - helping our clients succeed.
            </p>
            <p>
              Today, the availability of information is opening up a world of possibilities. Realizing those possibilities takes more than numbers. It takes more than technology. It takes people. People who can turn the potential of information into meaningful solutions. Solutions that simplify businesses, support decision making, improve business processes, but at a price necessary to support our business and not just to improve our bottom lines.
            </p>
            <p>
              Our belief is to ensure a collaborative approach, partnering with you and improvising the information analytics that your business deserves. Our consultants understand your business needs, study the market you play within, and define the strategy that makes you succeed in what you do.
            </p>
            <p>
              Our collective approach from consultants strives not toward writing the success story for us, but for our clients. How our analytics have provided an advantage to clients in improving their business.
            </p>
            <p>
              Our consultants, with business insight, have delivered in the technology space, accelerating growth for multiple global companies, solving complex business challenges, and providing innovative solutions that give an edge to their business over the competition. The innovative specialization our team has constitutes the following streams:
            </p>
          </section>

          <ul className="list-disc list-inside text-lg space-y-2 font-semibold max-w-md mx-auto md:mx-0 marker:text-red-600">
            <li className="hover:text-red-400 cursor-pointer">E-commerce</li>
            <li className="hover:text-red-400 cursor-pointer">Mobility and Smart Technology</li>
            <li className="hover:text-red-400 cursor-pointer">Enterprise Cloud</li>
            <li className="hover:text-red-400 cursor-pointer">Business Intelligence and Data Analytics</li>
            <li className="hover:text-red-400 cursor-pointer">EAI / ERP Solutions</li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center mt-40">
        <img
        src={ObjImage}
        alt="GenexCorp Objective"
        className="rounded-xl shadow-lg w-full object-cover max-h-[500px]"/>
        </div>
      </div>
    </div>
  );
}

export default Objective;
