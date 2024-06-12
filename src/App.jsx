import { useState } from "react"
import Blogs from "./components/blog/Blogs"
import Bookmarks from "./components/bookmarks/Bookmarks"
import Header from "./components/header/Header"


function App() {

const[bookmarks,setBookmark]= useState([])
const[readingtime,setReadingtime]= useState(0)
const handleBookMark =(blog)=>{
const newbookmark =[...bookmarks,blog]
setBookmark(newbookmark);
}

const handlemarkasread = (time,id) => {
  const newreadingtime = readingtime + time;
  setReadingtime(newreadingtime);

const remainingbookmarks = bookmarks.filter(bookmark=>bookmark.id !== id)
setBookmark(remainingbookmarks)
};
  return (
    <>
    <Header/>
 
    <div className="md:flex max-w-7xl mx-auto">

    <Blogs handleBookMark={handleBookMark} handlemarkasread={handlemarkasread} />
    <Bookmarks bookmarks={bookmarks} readingtime={readingtime} />
    </div>
    </>
  )
}

export default App
