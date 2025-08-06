import React from 'react';
import { Link } from 'react-router-dom';

const BackHomeButton = () => {
  return (
    <div className="mt-8 text-center">
      <Link
        to="/"
        className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
      >
         Back to Home
      </Link>
    </div>
  );
};

export default BackHomeButton;
