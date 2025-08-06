import React from 'react';
import BackHomeButton from '../components/BackHomeButton';
const About = () => {
  return (
    <div className="text-center py-10">
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl"> 
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Our Blog</h1>
          <p className="text-lg text-gray-600">
            Discover the story behind our passion for sharing knowledge and inspiration
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 text-center"> 
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
          <div className="max-w-2xl mx-auto"> 
            <p className="text-gray-700 mb-4">
              Founded in 2025, our blog began as a small passion project to share practical tips about design, cooking, and lifestyle. 
              What started as a weekend hobby has grown into a thriving community.
            </p>
            <p className="text-gray-700 mb-4">
              We believe everyone has valuable knowledge to share, and we're committed to breaking down barriers in creative fields.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Meet the Team</h3>
            <p className="text-gray-700 mb-4">
              Our diverse team includes designers, chefs, and writers passionate about making professional knowledge accessible.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 inline-block text-left"> {/* inline-block for centered list */}
              <li>Frankie Sullivan - Product Design Expert</li>
              <li>Emily Carter - Culinary Specialist</li>
              <li>Alex Morgan - Content Strategist</li>
            </ul>
          </div>
        </div>

        
        <div className="bg-blue-50 rounded-lg p-6 md:p-8 mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-blue-900 mb-6">
              To democratize knowledge and make professional-grade advice accessible to everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
             
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Accessibility</h3>
                <p className="text-gray-700">Breaking down complex topics</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Community</h3>
                <p className="text-gray-700">Supportive network</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Innovation</h3>
                <p className="text-gray-700">Evolving content</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get the latest articles and exclusive content
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    <BackHomeButton/>
    </div>
  );
};

export default About;