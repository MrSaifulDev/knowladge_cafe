
import './App.css'
import Blogs from './comonents/Blogs/Blogs'
import Bookmarks from './comonents/Bookmarks/Bookmarks'
import Header from './comonents/header/Header'

function App() {
  

  return (
    <>
    <Header></Header>
    <div  className='md:flex max-w-7xl'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App
