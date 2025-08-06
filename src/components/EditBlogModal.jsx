import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { editBlogAtom } from '../atom/atoms';

const EditBlogModal = ({ blog, index, onClose }) => {
  const editBlog = useSetAtom(editBlogAtom);

  const [formData, setFormData] = useState(blog);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editBlog({ index, updatedBlog: formData });
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">Edit your Post</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input name="author" value={formData.author} onChange={handleChange} className="border p-2" />
          <input name="date" value={formData.date} onChange={handleChange} className="border p-2" />
        </div>
        <input name="profileLink" value={formData.profileLink} onChange={handleChange} className="border p-2 w-full mb-2" />
        <input name="title" value={formData.title} onChange={handleChange} className="border p-2 w-full mb-2" />
        <textarea name="description" value={formData.description} onChange={handleChange} className="border p-2 w-full mb-2" />
        <textarea name="content" value={formData.content} onChange={handleChange} className="border p-2 w-full mb-4" />
        <div className="flex justify-between">
          <button onClick={onClose} className="bg-red-600 text-white px-4 py-1 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-black text-white px-4 py-1 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditBlogModal;
