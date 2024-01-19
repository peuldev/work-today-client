import { useEffect, useState } from "react";
import OurTitle from "../../../components/OurTitle";
import DisplyBlog from "./DisplyBlog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-[#1D2027] px-2">
      <div className="max-w-screen-xl mx-auto">
        {/* blog  */}
        <div className="py-20">
          <OurTitle subHeading={"BLOG POSTS"}></OurTitle>
          <h1 className="text-center text-4xl  text-white font-Jost">
            News & Update
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 pb-20">
          {blogs.map((blog) => (
            <DisplyBlog blog={blog} key={blog._id}></DisplyBlog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
