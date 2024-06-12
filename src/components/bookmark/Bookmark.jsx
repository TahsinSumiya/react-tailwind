import React from 'react'
import PropTypes from 'prop-types'

export default function Bookmark({ bookmark }) {
  const { title, author } = bookmark;
  console.log("Bookmark object:", bookmark); // Log the bookmark object

  return (
    <div className='bg-violet-200  p-4 m-4 rounded-2xl'>
   
        <h3 className='text-3xl text-blue-800'>{title}</h3>
     
    </div>
  )
}
