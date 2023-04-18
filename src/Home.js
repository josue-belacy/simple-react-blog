import { useState } from "react";
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Jackie")}
        title="Jackie's Blogs"
      />
    </div>
  );
};

export default Home;
