import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My New Website', body: 'lorem Ipsum', author: 'Mario', id: 1 },
        { title: 'Welcome Party', body: 'lorem Ipsum', author: 'Yashi', id: 2 },
        { title: 'Web dev tips', body: 'lorem Ipsum', author: 'Mario', id: 3 }

    ]);
    const [name, setName] = useState('Mario');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('Use Effect Ran');
        console.log(blogs);
    }, [name])

    return (
        <div className="home">
            <BlogList
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
            <p>{name}</p>
        </div>
    );
}

export default Home;