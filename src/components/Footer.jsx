import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = ({ mode }) => {
  return (
    <footer className={`w-full border border-t-[6px] border-red-800 
     relative top-[2rem] py-8 ${mode === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} shadow-md`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold text-yellow-500 transition-transform transform hover:scale-105">
            <p className='md:flex xl:text-3xl xl:font-extrabold sm:flex xl:flex hidden
           bg-gradient-to-r from-violet-500 to-red-500 
           bg-clip-text text-transparent'>
          <span 
         className='text-3xl'> M</span>
         Y <span className='text-3xl'>SHOP</span>
          </p>
            </Link>
            <p className="mt-2">
              Your one-stop shop for the best products. Shop with us and experience the difference.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`}>
                  Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/about" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`}>
                  About
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link to="/contact" className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`}>
                  Contact
                </Link>
              </motion.div>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <nav className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`} 
                whileHover={{ scale: 1.2 }}
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`} 
                whileHover={{ scale: 1.2 }}
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`} 
                whileHover={{ scale: 1.2 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`hover:${mode === 'light' ? 'text-gray-700' : 'text-yellow-400'} transition-colors duration-300`} 
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`p-2 rounded ${mode === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'} transition-colors duration-300`}
              />
              <button type="submit" className="p-2 rounded bg-yellow-500 text-white hover:bg-yellow-600 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`mt-8 border-t pt-4 text-center ${mode === 'light' ? 'border-gray-300' : 'border-gray-700'}`}>
          <p>&copy; 2024 Qmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
