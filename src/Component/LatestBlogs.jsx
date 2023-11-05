import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  const { blogs, isLoading } = useContext(AuthContext);

  if (!isLoading) {
    const sortedBlogs = blogs.slice().sort((a, b) => {
      const timestampA = new Date(a.timestamp);
      const timestampB = new Date(b.timestamp);
      return timestampB - timestampA;
    });

    const latestBlogs = sortedBlogs.slice(0, 6);

    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/bg.jpg)",
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl md:text-5xl text-center my-12">
            Latest <span className="text-grn">Blogs</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {latestBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog._id}></BlogCard>
            ))}
          </div>
        <div className="flex justify-center my-12"><Link to={"/blogs"}><button className="btn bg-grn text-white">View More</button></Link></div>
        </div>
      </div>
    );
  } else {
    return <p>Loading....</p>;
  }
};

export default LatestBlogs;
