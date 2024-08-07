const BlogList = ({ blogs, title, subheading,  }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // const subheading = props.subheading;
    return (
        <div className="Blog-list">
            <h2>{title}</h2>
            <h3>{subheading}</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    
                </div>
            ))}
        </div>
    );
}

export default BlogList;