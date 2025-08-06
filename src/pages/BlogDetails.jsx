import { useParams, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { blogDataAtom, bookmarkedAtom } from '../atom/atoms';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa6';
import { useState } from 'react';
import EditBlogModal from '../components/EditBlogModal';
import BackHomeButton from '../components/BackHomeButton';
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useAtom(blogDataAtom);
  const [bookmarked, setBookmarked] = useAtom(bookmarkedAtom);
  const [isEditing, setIsEditing] = useState(false);

  const blogId = parseInt(id);
  const blog = blogs.find(b => b.id === blogId);
  const isBookmarked = bookmarked.includes(blogId);

  if (!blog) {
    return <div className="text-center mt-10 text-gray-500">404 - Blog Not Found</div>;
  }

  const handleBookmark = () => {
    let updatedBookmarked;
    if (isBookmarked) {
      updatedBookmarked = bookmarked.filter(id => id !== blogId);
    } else {
      updatedBookmarked = [...bookmarked, blogId];
    }
    setBookmarked(updatedBookmarked);
    localStorage.setItem('bookmarked', JSON.stringify(updatedBookmarked));
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      const updatedBlogs = blogs.filter(b => b.id !== blogId);
      setBlogs(updatedBlogs);
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

      const updatedBookmarked = bookmarked.filter(id => id !== blogId);
      setBookmarked(updatedBookmarked);
      localStorage.setItem('bookmarked', JSON.stringify(updatedBookmarked));

      navigate('/');
    }
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div>
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <div className="flex justify-between mb-4">
        <span className="text-sm text-gray-500">{blog.author}</span>
        <div className="flex gap-4 text-lg text-gray-600">
          {isBookmarked ? (
            <FaBookmark onClick={handleBookmark} className="text-blue-600 cursor-pointer" />
          ) : (
            <FaRegBookmark onClick={handleBookmark} className="cursor-pointer" />
          )}
          <FaEdit onClick={handleEdit} className="cursor-pointer" />
          <FaTrash onClick={handleDelete} className="cursor-pointer" />
        </div>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl shadow mb-6"
        onError={(e) => {
          e.target.src = '/placeholder-image.jpg';
        }}
      />

      <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>

      {isEditing && (
        <EditBlogModal
          blog={blog}
          index={blogs.findIndex(b => b.id === blogId)}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
    <BackHomeButton/>
    </div>
  );
};

export default BlogDetails;
