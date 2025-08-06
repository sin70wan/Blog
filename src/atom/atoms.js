import { atom } from 'jotai';
import blogData from '../data/data.js';


const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || blogData;


export const blogDataAtom = atom(storedBlogs);

const loadBookmarks = () => {
  try {
    const raw = localStorage.getItem('bookmarked');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const bookmarkedAtom = atom(loadBookmarks());

export const syncedBookmarkedAtom = atom(
  (get) => get(bookmarkedAtom),
  (get, set, newBookmarks) => {
    set(bookmarkedAtom, newBookmarks);
    try {
      localStorage.setItem('bookmarked', JSON.stringify(newBookmarks));
    } catch (e) {
      console.error('Failed to save bookmarks', e);
    }
  }
);


export const addBlogAtom = atom(
  null,
  (get, set, newBlog) => {
    const updated = [...get(blogDataAtom), newBlog];
    set(blogDataAtom, updated);
    localStorage.setItem('blogs', JSON.stringify(updated));
  }
);


export const editBlogAtom = atom(
  null,
  (get, set, { index, updatedBlog }) => {
    const blogs = [...get(blogDataAtom)];
    blogs[index] = updatedBlog;
    set(blogDataAtom, blogs);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
);

export const deleteBlogAtom = atom(
  null,
  (get, set, index) => {
    const blogs = [...get(blogDataAtom)];
    blogs.splice(index, 1);
    set(blogDataAtom, blogs);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
);
