import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";




const Blogs = () => {

    const [blogs,setBlogs] = useState([])

useEffect (() => {
     
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))


} , [])

    return (
        <div className="md:w-2/3">
            <h1>this is blogs</h1>

            <h4>length {blogs.length}</h4>


            {
                blogs.map(blog => <Blog 
                    
                    key={blog.id} 
                    blog={blog} 
                    
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;