import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new blog", body: "lorem ipsum...", author: "Jackie", id: 1 },
    {
      title: "How did React become popular",
      body: "lorem ipsum...",
      author: "Melinda",
      id: 2,
    },
    {
      title: "Web development tools ",
      body: "lorem ipsum...",
      author: "Anne",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
