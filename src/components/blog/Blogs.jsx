import React, { useEffect, useState } from 'react'
import Blog from '../singleBlock/Blog'

const Blogs = ({handleBookMark,handlemarkasread}) => {

    const [blogs,setBlogs]= useState([])

    useEffect(()=>{
        fetch('blog.json').then(res=>res.json()).then(data=>setBlogs(data))
    },[])
  return (
    <div className='md:w-2/3'>
      {blogs.map (blog=>
        <Blog blog={blog} key={blog.id} handleBookMark={handleBookMark} handlemarkasread={handlemarkasread}/>
      )}
    </div>
  )
}

export default Blogs
