import React from 'react';
import { useAtom } from 'jotai';
import { blogDataAtom } from '../atom/atoms';
import { Link } from 'react-router-dom';

const Post = () => {
  const [blogs] = useAtom(blogDataAtom);

  if (!blogs.length) {
    return (
      <div className="text-center py-10 text-gray-500">
        No blogs yet. Click 'Add a blog' to post one!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => {
        const blogId = blog.id ?? index;
        return (
          <Link
            to={`/blog/${blogId}`}
            key={`blog-${blogId}`}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={blog.image || '/placeholder-image.jpg'}
              alt={blog.title || 'Blog Image'}
              className="w-full h-[200px] object-cover"
              onError={(e) => {
                e.target.src = '/placeholder-image.jpg';
              }}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">{blog.title || 'Untitled'}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {blog.author || 'Unknown'} | {blog.date || 'No Date'}
              </p>
             
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Post;
