import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const showTimeout = useRef(null);
  const hideTimeout = useRef(null);

  const toggleNav = () => setNavOpen(!navOpen);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 100);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleMouseEnter = (id) => {
    clearTimeout(hideTimeout.current);
    showTimeout.current = setTimeout(() => setDropdownOpen(id), 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(showTimeout.current);
    hideTimeout.current = setTimeout(() => setDropdownOpen(null), 300);
  };

  return (
    <nav
      className={`text-black w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 shadow-lg`}
      style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="/"
              className="flex items-center transition-colors duration-300 border-b-2 border-transparent hover:border-red-400"
            >
              Home <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            {dropdownOpen === 'home' && (
              <ul
                className="absolute bg-gray-100 text-black shadow-md mt-2 rounded-md w-52 z-50 space-y-2 p-2"
                onMouseEnter={() => clearTimeout(hideTimeout.current)}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <Link to="/objective" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Our Objective</Link>
                </li>
                <li>
                  <Link to="/portfolio" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Portfolio</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen === 'services' && (
              <ul
                className="absolute bg-gray-100 text-black shadow-md mt-2 rounded-md w-52 z-50 space-y-2 p-2"
                onMouseEnter={() => clearTimeout(hideTimeout.current)}
                onMouseLeave={handleMouseLeave}
              >
                <li><a href="#" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Product Development</a></li>
                <li><a href="#" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">IT Consulting</a></li>
                <li><a href="#" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">IT Resourcing</a></li>
              </ul>
            )}
          </li>

          {/* Trainings */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('trainings')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">
              Trainings <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen === 'trainings' && (
              <ul
                className="absolute bg-gray-100 text-black shadow-md mt-2 rounded-md w-52 z-50 space-y-2 p-2"
                onMouseEnter={() => clearTimeout(hideTimeout.current)}
                onMouseLeave={handleMouseLeave}
              >
                <li><Link to="/training-programs" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Training / Internships</Link></li>
                <li><Link to="/internship-programs" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Real-Time Internships</Link></li>
                <li><a href="#" className="block text-sm font-light hover:bg-gray-200 px-4 py-2 rounded">Corporate Training</a></li>
              </ul>
            )}
          </li>

          <li><Link to="/jobs" className="transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Jobs</Link></li>
          <li><Link to="/support" className="transition-colors duration-300 border-b-2 border-transparent hover:border-red-400">Support</Link></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-black" onClick={toggleNav}>
          {navOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </div>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-black font-medium space-y-5">
          {/* Mobile Dropdowns */}
          {['home', 'services', 'trainings'].map((section) => (
            <div key={section}>
              <button
                onClick={() => setDropdownOpen(dropdownOpen === section ? null : section)}
                className="flex justify-between items-center w-full"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <ChevronDown className={`w-5 h-5 ${dropdownOpen === section ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === section && (
                <ul className="pl-4 mt-1 space-y-2 text-sm text-black font-light">
                  {section === 'home' && (
                    <>
                      <li><Link to="/objective" className="block hover:bg-gray-200 px-3 py-1 rounded">Our Objective</Link></li>
                      <li><Link to="/portfolio" className="block hover:bg-gray-200 px-3 py-1 rounded">Portfolio</Link></li>
                    </>
                  )}
                  {section === 'services' && (
                    <>
                      <li><a href="#" className="block hover:bg-gray-200 px-3 py-1 rounded">Product Development</a></li>
                      <li><a href="#" className="block hover:bg-gray-200 px-3 py-1 rounded">IT Consulting</a></li>
                      <li><a href="#" className="block hover:bg-gray-200 px-3 py-1 rounded">IT Resourcing</a></li>
                    </>
                  )}
                  {section === 'trainings' && (
                    <>
                      <li><Link to="/training-programs" className="block hover:bg-gray-200 px-3 py-1 rounded">Training / Internships</Link></li>
                      <li><Link to="/internship-programs" className="block hover:bg-gray-200 px-3 py-1 rounded">Real-Time Internships</Link></li>
                      <li><a href="#" className="block hover:bg-gray-200 px-3 py-1 rounded">Corporate Training</a></li>
                    </>
                  )}
                </ul>
              )}
            </div>
          ))}
          <Link to="/jobs" className="block">Jobs</Link>
          <Link to="/support" className="block">Support</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
