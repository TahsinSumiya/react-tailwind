import React from 'react';
import Bookmark from '../bookmark/Bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingtime }) => {
  console.log("Bookmarks array:", bookmarks); // Log the bookmarks array

  return (
    <div className='md:w-1/3 bg-slate-300 m-4 rounded-2xl'>
      <div className='bg-slate-400 m-5 p-5 rounded-2xl'>
        <h3 className='text-center text-white text-3xl'>Reading time: {readingtime} minutes</h3>
      </div>
      <p className='text-2xl text-green-700 mx-5'>Total bookmarks saved: {bookmarks.length}</p>
      {bookmarks.map((bookmark,idx) => (
        <Bookmark key={idx} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
    })
  ).isRequired,
  readingtime: PropTypes.number.isRequired,
};

export default Bookmarks;
