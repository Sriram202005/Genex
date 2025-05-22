import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpeg';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleDropdown = (id) => setDropdownOpen(dropdownOpen === id ? null : id);

  return (
    <nav className="bg-[#000435] text-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Left */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav Right */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li className="relative group">
            <button className="flex items-center hover:text-white transition-colors duration-300">
              Home <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-52 z-10">
              <li>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Our Objective</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Portfolio</a>
              </li>
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center hover:text-white transition-colors duration-300">
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-52 z-10">
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Product Development</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">IT Consulting</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">IT Resourcing</a></li>
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center hover:text-white transition-colors duration-300">
              Trainings <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            <ul className="absolute hidden group-hover:block bg-white text-black shadow-md mt-2 rounded-md w-52 z-10">
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Training / Internships</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Real Time Internship</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Corporate Training</a></li>
            </ul>
          </li>

          <li><a href="#" className="hover:text-white transition-colors duration-300">Jobs</a></li>
          <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white" onClick={toggleNav}>
          {navOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-[#000435] px-4 pb-4 text-white font-medium space-y-2">
          {/* Dropdowns */}
          {['home', 'services', 'trainings'].map((section) => (
            <div key={section}>
              <button
                onClick={() => toggleDropdown(section)}
                className="flex justify-between items-center w-full hover:text-white"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <ChevronDown className={`w-5 h-5 ${dropdownOpen === section ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === section && (
                <ul className="pl-4 mt-1 space-y-1 text-sm text-white">
                  {section === 'home' && (
                    <>
                      <li><a href="#" className="block hover:text-white">Our Objective</a></li>
                      <li><a href="#" className="block hover:text-white">Portfolio</a></li>
                    </>
                  )}
                  {section === 'services' && (
                    <>
                      <li><a href="#" className="block hover:text-white">Product Development</a></li>
                      <li><a href="#" className="block hover:text-white">IT Consulting</a></li>
                      <li><a href="#" className="block hover:text-white">IT Resourcing</a></li>
                    </>
                  )}
                  {section === 'trainings' && (
                    <>
                      <li><a href="#" className="block hover:text-white">Training / Internships</a></li>
                      <li><a href="#" className="block hover:text-white">Real Time Internship</a></li>
                      <li><a href="#" className="block hover:text-white">Corporate Training</a></li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
          <a href="#" className="block hover:text-white">Jobs</a>
          <a href="#" className="block hover:text-white">Support</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
