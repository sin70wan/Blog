import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onPostClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-16 md:h-20 sticky top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold">
            <h1>Blog</h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-lg font-light hover:text-gray-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-lg font-light hover:text-gray-600 transition">About</Link>
            </li>
            <li>
              <Link to="/saved" className="text-lg font-light hover:text-gray-600 transition">Saved</Link>
            </li>
          </ul>
        </div>

        {/* Add Blog Button - Desktop */}
        <div className="hidden md:block">
          <button
            onClick={onPostClick}
            className="bg-black text-white text-lg rounded-lg px-4 py-2 hover:bg-gray-800 transition"
          >
            Add a blog
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white w-full absolute left-0 px-4 pb-4 shadow-md`}>
        <ul className="flex flex-col space-y-3 py-2">
          <li>
            <Link 
              to="/" 
              className="block text-lg font-light py-2 hover:bg-gray-100 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="block text-lg font-light py-2 hover:bg-gray-100 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/saved" 
              className="block text-lg font-light py-2 hover:bg-gray-100 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Saved
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                onPostClick();
                setIsMenuOpen(false);
              }}
              className="w-full bg-black text-white text-lg rounded-lg px-4 py-2 mt-2 hover:bg-gray-800 transition"
            >
              Add a blog
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;