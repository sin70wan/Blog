import React from 'react';
import { useAtom } from 'jotai';
import { bookmarkedAtom, blogDataAtom } from '../atom/atoms';
import { Link } from 'react-router-dom';
import BackHomeButton from '../components/BackHomeButton';

const Saved = () => {
  const [bookmarked] = useAtom(bookmarkedAtom);
  const [blogs] = useAtom(blogDataAtom);

 
  const savedBlogs = bookmarked
    .map((id) => blogs.find((blog) => blog.id === id || blog.id === Number(id)))
    .filter(Boolean);

  return (
    <div className="text-center py-10">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Saved Blogs</h1>

        {savedBlogs.length === 0 ? (
          <p className="text-gray-600">You have no saved blogs.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedBlogs.map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id}>
                <div className="bg-white rounded-lg shadow hover:shadow-md transition p-4">
                  <img
                    src={blog.image || '/placeholder-image.jpg'}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                  <h2 className="text-xl font-semibold">{blog.title}</h2>
                  <p className="text-sm text-gray-500">
                    By {blog.author || 'Unknown'} on {blog.date || 'Unknown'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <BackHomeButton />
    </div>
  );
};

export default Saved;
