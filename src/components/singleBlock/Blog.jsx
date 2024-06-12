import React from 'react';
import { IoBookmarkSharp } from "react-icons/io5";

const Blog = ({ blog, handleBookMark, handlemarkasread }) => {
  const { title, cover, reading_time, author_img, author, posted_date, hash_tags,id } = blog;

  return (
    <div className='mb-20'>
      <img className='w-full h-96 rounded-2xl' src={cover} alt={title} />
      <div className='flex justify-between'>
        <div className='flex my-4'>
          <img className='w-14 h-14 rounded-full' src={author_img} alt={author} />
          <div className='ml-6'>
            <h3 className='text-2xl'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex'>
          <span className='text-xl mt-8'>{reading_time} min read</span>
          <button onClick={() => handleBookMark(blog)} className='ml-1 text-gray-400 text-2xl hover:text-green-500'>
            <IoBookmarkSharp />
          </button>
        </div>
      </div>
      <h1 className='text-4xl my-2'>{title}</h1>
      <p>
        {hash_tags.map((hash, idx) => <span key={idx} className='mx-2 my-5 text-gray-600'>{hash}</span>)}
      </p>
      <button onClick={() => handlemarkasread(reading_time,id)} className='ml-1 text-gray-400 my-2 underline font-bold hover:text-red-500'>
        mark as read
      </button>
    </div>
  );
};

export default Blog;
