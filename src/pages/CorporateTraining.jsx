import React, { useState } from 'react';
import { FaCogs, FaBook, FaServer, FaGlobe } from 'react-icons/fa';

const CorporateTraining = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-gray-800 mt-18">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl  mb-4">Corporate Training Programs</h1>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex bg-white rounded-full shadow overflow-hidden">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-2 text-sm  capitalize focus:outline-none ${activeTab === 'overview' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-2 text-sm capitalize focus:outline-none ${activeTab === 'schedule' ? 'bg-red-500 text-white' : 'text-gray-700'}`}
            >
              Scheduling & Pricing
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <FaCogs size={32} />,
                title: "Pre requisites for Designer & Developer",
                content: "Organization having people on-board to change the technology platform / wanted to maintain in-house QlikView Application, having prior experience in SQL / Database Knowledge / Data Warehousing knowledge; this program is best fit for them."
              },
              {
                icon: <FaBook size={32} />,
                title: "How we conduct training",
                content: "Onsite at a stretch of 5 Days for Designer & Developer Technical, Fundamental and Business Oriented case study based training schedule, which will cover your choice of Business Cases with hand on Exercise..."
              },
              {
                icon: <FaServer size={32} />,
                title: "Pre requisites for Administrator",
                content: "Prior Experience of Windows Environment, concept of windows error handler, and experience of Database clustering will be an added advantage."
              },
              {
                icon: <FaGlobe size={32} />,
                title: "Services Country",
                content: "India, USA, UK, Malaysia, Singapore, Thailand, UAE, South Africa, Kuwait, Bahrain"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-xl font-semibold text-red-500 flex items-center gap-3">
                  {item.icon} {item.title}
                </h3>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
              <h2 className="text-2xl  text-red-500 mb-2">Upcoming Batches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                {[
                  {
                    date: '16th Jan, 2024 - 24th Jan, 2024',
                    type: 'Virtual Class',
                    seats: '10 seats available'
                  },
                  {
                    date: '02nd Mar, 2024 - 10th Mar, 2024',
                    type: 'Virtual Class',
                    seats: '8 seats available'
                  },
                  {
                    date: '25th Mar, 2024 - 30th Mar, 2024',
                    type: 'Classroom Training',
                    seats: '15 seats available'
                  },
                  {
                    date: '01st June, 2024 - 05th June, 2024',
                    type: 'Classroom Training',
                    seats: '12 seats available'
                  }
                ].map((batch, idx) => (
                  <div key={idx} className="border p-4 rounded bg-white shadow-md h-full flex flex-col justify-between relative">
                    <div>
                      <strong>{batch.date}</strong><br />
                      {batch.type} <br />
                      {batch.seats}
                    </div>
                    <button onClick={handleEnrollClick} className="text-blue-500 underline block hover:text-red-400">Enroll Now</button>
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-xs  px-2 py-1 rounded-full">
                      Open Now
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
              <h2 className="text-2xl font-semibold text-red-500 mb-2">Training Packages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="border p-4 rounded bg-white shadow-md h-full flex flex-col justify-between">
                  <div>
                    <strong>Web Class</strong><br />
                    $800 / person<br />
                    Live online sessions<br />
                    Course materials included<br />
                    24/7 support
                  </div>
                  <button onClick={handleEnrollClick} className="text-blue-500 underline block hover:text-red-400">Get Started</button>
                </div>
                <div className="border p-4 rounded bg-white shadow-md h-full flex flex-col justify-between">
                  <div>
                    <strong>Classroom Training</strong><br />
                    $1500 for batch of 5<br />
                    $2500 for batch of 10<br />
                    *To avail discount contact our sales team
                  </div>
                  <button onClick={handleEnrollClick} className="text-blue-500 underline block  hover:text-red-400">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-md">
              <h2 className="text-2xl font-bold text-center text-red-500 mb-4">Book my Training</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Person Name*" className="w-full border p-2 rounded" />
                <input type="email" placeholder="Person Email*" className="w-full border p-2 rounded" />
                <input type="tel" placeholder="Phone No*" className="w-full border p-2 rounded" />
                <select className="w-full border p-2 rounded">
                  <option>--- Select ---</option>
                  <option>Change in Technology - $450 per person</option>
                  <option>Fresher - $500 per person</option>
                </select>
                <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
                <div className="flex justify-between">
                  <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:text-blue-500">Book</button>
                  <button type="button" onClick={closeModal} className="text-gray-600">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CorporateTraining;

