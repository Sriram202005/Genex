import React from 'react';

const CorporateTraining = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Corporate Training</h1>
          <p className="text-lg">Accelerate your career with QlikView Designer & Developer training at GenexCorp.</p>
        </div>

        {/* Course Description */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Course Overview</h2>
          <p className="mb-4">
            QlikView Designer & Developer course is a combination of demonstrations and hands-on exercises covering various QlikView components.
          </p>
          <p className="mb-4">
            Topics include UI layout, design best practices, working with scripts, loading data, deploying applications, Google Maps integration, and extension objects.
          </p>
        </div>

        {/* Prerequisites */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-3">Designer & Developer Prerequisites</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Team experience in SQL / Data Warehousing</li>
              <li>Desire to maintain in-house QlikView applications</li>
              <li>Willingness to adopt new tech platforms</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-red-500 mb-3">Administrator Prerequisites</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Windows environment knowledge</li>
              <li>Experience with error handling</li>
              <li>Database clustering familiarity</li>
            </ul>
          </div>
        </div>

        {/* Training Methodology */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">How We Conduct Training</h2>
          <p>
            Onsite sessions conducted over 5 days, covering technical, fundamental, and business-oriented case studies. Each session includes practical exercises and business use-case implementations for real-world relevance.
          </p>
        </div>

        {/* Services Countries */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Services Available In</h2>
          <p>
            India, USA, UK, Malaysia, Singapore, Thailand, UAE, South Africa, Kuwait, Bahrain
          </p>
        </div>

        {/* Course Fee */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Course Fee</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>Web Class:</strong> $800 per person</li>
            <li><strong>Classroom Courses:</strong> $1500 for batch of 5, $2500 for batch of 10</li>
            <li className="text-red-500">*To avail discount, contact the sales team.</li>
          </ul>
        </div>

        {/* Training Schedule */}
        <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Classes & Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border">
              <thead className="bg-red-100 text-red-600 font-semibold">
                <tr>
                  <th className="px-4 py-2 border">Mode</th>
                  <th className="px-4 py-2 border">Start Date</th>
                  <th className="px-4 py-2 border">End Date</th>
                  <th className="px-4 py-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Virtual Class</td>
                  <td className="px-4 py-2 border">16th Jan, 2021</td>
                  <td className="px-4 py-2 border">24th Jan, 2021</td>
                  <td className="px-4 py-2 border text-green-600">Open</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Virtual Class</td>
                  <td className="px-4 py-2 border">02nd Mar, 2021</td>
                  <td className="px-4 py-2 border">10th Mar, 2021</td>
                  <td className="px-4 py-2 border text-green-600">Open</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Classroom Training</td>
                  <td className="px-4 py-2 border">25th Mar, 2021</td>
                  <td className="px-4 py-2 border">30th Mar, 2021</td>
                  <td className="px-4 py-2 border text-green-600">Open</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Classroom Training</td>
                  <td className="px-4 py-2 border">01st June, 2021</td>
                  <td className="px-4 py-2 border">05th June, 2021</td>
                  <td className="px-4 py-2 border text-green-600">Open</td>
                </tr>
              </tbody>
            </table>
            <p className="text-red-500 mt-2 text-sm">*Please talk to the sales team for terms and conditions.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition">Book My Training</button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-100 transition">Download Course Outline</button>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
