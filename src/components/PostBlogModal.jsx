import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { blogDataAtom } from '../atom/atoms';

const PostBlogModal = ({ onClose }) => {
  const setBlogs = useSetAtom(blogDataAtom);

  const [formData, setFormData] = useState({
    id: Date.now(),  
    author: '',
    date: '',
    profileLink: '',
    title: '',
    description: '',
    content: '',
    image: '/placeholder-image.jpg', 
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePost = () => {
    if (!formData.author || !formData.title || !formData.content) {
      alert('Please fill in required fields.');
      return;
    }

  
    setBlogs(prev => {
      const updated = [...prev, formData];
      localStorage.setItem('blogs', JSON.stringify(updated));
      return updated;
    });

    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-xl font-bold mb-4 text-center">Post a Blog</h2>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <input
            name="author"
            placeholder="Full Name"
            className="border p-2"
            value={formData.author}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="MM/DD/YYYY"
            className="border p-2"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <input
          name="profileLink"
          placeholder="https://www.example.com"
          className="border p-2 w-full mb-2"
          value={formData.profileLink}
          onChange={handleChange}
        />

        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full mb-2"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 w-full mb-2"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Content"
          className="border p-2 w-full mb-4"
          value={formData.content}
          onChange={handleChange}
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handlePost}
            className="bg-black text-white px-4 py-1 rounded"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBlogModal;
