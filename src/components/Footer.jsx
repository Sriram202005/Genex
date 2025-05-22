import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="py-10 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Genexcorp</h3>
            <p className="mb-4">
              Some believe in the power of numbers. Some believe in the power of technology. 
              We believe in the power of people, power of human touch which brings best out 
              of the best and the impact people can have on technology.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaGooglePlusG />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Genexcorp Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "home.html", text: "Home" },
                { href: "our-objectivity.html", text: "Our Objective" },
                { href: "portfolio.html", text: "Portfolio" },
                { href: "corporate-training.html", text: "Corporate Training" },
                { href: "career-augmentation-training.html", text: "Career Augmentation Training" },
                { href: "jobs.html", text: "Jobs" },
                { href: "getintouch.html", text: "Support" }
              ].map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaArrowRight className="text-blue-400" />
                  <a href={link.href} className="hover:text-blue-400">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1 text-blue-400" />
                VT Plaza, 4th Floor, KPHB Colony, Kukatpally, Road # 1, Hyderabad - 500085, Telangana, India
              </p>
              <p className="flex items-center">
                <FaPhoneAlt className="mr-2 text-blue-400" />
                +91-9920779995
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-400" />
                <a href="mailto:hr@genexcorp.com" className="hover:text-blue-300">hr@genexcorp.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-4 text-center bg-gray-800 text-gray-400 text-xs">
        &copy; Genexcorp.com, 2015. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
