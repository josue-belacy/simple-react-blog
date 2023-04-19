import { useState, useEffect } from "react";
import BlogList from "./BlogList";

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
  const [name, setName] = useState("Jackie");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
    console.log("name");
  }, [name]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Amy")}>change name</button>
    </div>
  );
};

export default Home;
