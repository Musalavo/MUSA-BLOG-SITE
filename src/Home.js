import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/Blogs')
    
    // const [name, setName] = useState('Mario');

  
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading.....</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {/* <BlogList
                blogs={blogs}
                title="All Blogs!"
                subheading="The Best Of its"
                handleDelete={handleDelete}
            />
            <BlogList
                blogs={blogs.filter((blog) => blog.author === 'Mario')}
                title="Mario's blog"
                handleDelete={handleDelete}
            />
            <button onClick={() => setName('Kyle')}>Change Name</button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;  
// npm install react-router-dom@6   