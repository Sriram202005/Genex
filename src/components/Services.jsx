import React from 'react';

const servicesData = [
  {
    title: 'Trainings / Internships',
    description:
      'We provide hands-on trainings and internships tailored for students and professionals. Our programs cover real-world case studies, practical tools, and industry-focused learning. Participants gain exposure to live projects and technical guidance.',
    icon: <i className="bx bx-briefcase text-6xl text-red-400 mr-8"></i>,
  },
  {
    title: 'Consulting',
    description:
      'We help organizations identify challenges and implement effective BI and analytics solutions. Our consulting approach is business-focused, cost-effective, and tailored to client needs. We specialize in solving complex analytics problems with precision.',
    icon: <i className="bx bx-file text-6xl text-red-400 mr-8"></i>,
  },
  {
    title: 'Product Development',
    description:
      'We assist businesses in developing agile, scalable, and reliable BI products. From blueprint to deployment, our team ensures continuous innovation, optimal performance, and user-centric design. Perfect for companies looking to scale fast.',
    icon: <i className="bx bx-cog text-6xl text-red-400 mr-8"></i>,  // Changed here
  },
  {
    title: 'Services',
    description:
      'We offer a wide range of enterprise services including analytics dashboards, reporting tools, data warehousing, and more. Our goal is to provide insightful, automated, and visually compelling solutions that drive business decisions.',
    icon: <i className="bx bx-user text-6xl text-red-400 mr-8"></i>,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Offerings</h2>
        <p className="text-gray-600 text-lg">
          Explore the services we provide to accelerate your business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {servicesData.map((service, index) => (
        <div
          key={index}
          className="group flex items-center space-x-8 p-4 rounded transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            {React.cloneElement(service.icon, { className: service.icon.props.className + " group-hover:text-red-600" })}
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <a href="#" className="inline-block mt-4 bg-gray-400 text-black px-6 py-2 rounded hover:bg-red-400 transition">
                Read more »
              </a>
            </div>
         </div>
))}
      </div>
    </section>
  );
};

export default Services;
