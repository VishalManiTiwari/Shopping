import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const LowerHeader = ({ mode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: "Women's Clothing", path: '/womens-clothing' },
    { name: "Men's Clothing", path: '/mens-clothing' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const renderNavLinks = (isMobile = false) => (
    navItems.map((item) => (
    <Link
      key={item.path}
      to={item.path}
      className={`${
        isMobile
          ? 'text-white text-2xl py-3 w-full text-center  border-b border-gray-600'
          : `text-lg font-semibold px-4 py-2 rounded-lg transition-colors 
          duration-300 ${
            mode === 'light'
           ? 'text-gray-800 hover:text-white hover:bg-gray-800'
            : 'text-gray-100 hover:text-gray-800 hover:bg-yellow-400'
            }`
        }`}
        onClick={() => setIsNavOpen(false)}
      >
        {item.name}
      </Link>
    ))
  );

  return (
    <nav className={`relative ${mode === 'light' ? 
    'bg-white' : 'bg-gray-900'} shadow-md`}>
      {/* Hamburger Menu Button for small and medium screens */}
      <div className="flex items-center justify-between 
      p-4 md:hidden">
        <button
          className="text-3xl text-gray-800 
          dark:text-gray-100 focus:outline-none"
          aria-label="Toggle Navigation"
          onClick={toggleNav}
        >
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links for larger screens */}
      <div className="hidden md:flex md:items-center 
      md:justify-center md:space-x-6 p-4">
        {renderNavLinks()}
      </div>

      {/* Mobile & Tablet Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full
           bg-gray-900 flex 
        flex-col items-center justify-center z-50 
        transition-transform transform md:hidden ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } duration-300`}
      >
        {renderNavLinks(true)}
      </div>
    </nav>
  );
};

export default LowerHeader;
