import React from 'react';

const Support = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl  text-center text-gray-800 mb-6">Support</h1>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          We're here to help you. Please fill out the form below, and our team will get back to you as soon as possible.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Designation<span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Your Designation"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              placeholder="Company Name"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Industry Vertical</label>
            <input
              type="text"
              placeholder="Industry Vertical"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Mobile No<span className="text-red-500">*</span></label>
            <input
              type="tel"
              placeholder="Mobile Number"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Support;
