import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onPostClick }) => {
  return (
    <div className="w-full h-[80px] sticky flex items-center bg-white top-0 z-50">
      <div className="flex-[2] flex items-center justify-center text-[33px] mx-4">
        <h1><b>Blog</b></h1>
      </div>
      <div className="flex-[6]">
        <ul className="flex items-center justify-center">
          <Link to="/"><li className="mr-[20px] text-[18px] font-light">Home</li></Link>
          <Link to="/about"><li className="mr-[20px] text-[18px] font-light">About</li></Link>
          <Link to="/saved"><li className="mr-[20px] text-[18px] font-light">Saved</li></Link>
        </ul>
      </div>
      <div className="flex-[3] flex items-center justify-center">
        <button
          onClick={onPostClick}
          className="bg-black cursor-pointer text-[#fff] text-[20px] rounded-[10px] px-2 py-2"
        >
          Add a blog
        </button>
      </div>
    </div>
  );
};

export default Navbar;
