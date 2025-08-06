import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Home from './pages/Home';
import Footer from './navbar/Footer';
import BlogDetails from './pages/BlogDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import About from './pages/About';
import Saved from './pages/Saved';
import PostBlogModal from './components/PostBlogModal'; // make sure path is correct
import BackHomeButton from './components/BackHomeButton';
const App = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <Router>
      <Navbar onPostClick={() => setShowPostModal(true)} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/saved" element={<Saved />} />
        <Route
  path="*"
  element={
    <div className="text-center mt-10 text-gray-500">
      <h1 className="text-2xl font-bold mb-4">404 - Blog Not Found</h1>
      <BackHomeButton />
    </div>
  }
/>

      </Routes>

     
      {showPostModal && (
        <PostBlogModal onClose={() => setShowPostModal(false)} />
      )}

     
    </Router>
  );
};

export default App;
