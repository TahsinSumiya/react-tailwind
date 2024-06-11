import Blogs from "./components/blog/Blogs"
import Bookmarks from "./components/bookmarks/Bookmarks"
import Header from "./components/header/Header"




function App() {


  return (
    <>
    <Header/>
 
    <div className="md:flex max-w-7xl mx-auto">

    <Blogs/>
    <Bookmarks/>
    </div>
    </>
  )
}

export default App
