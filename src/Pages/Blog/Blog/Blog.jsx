import { useEffect, useState } from "react";
import OurTitle from "../../../components/OurTitle";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-[#1D2027]">
      <div className="max-w-screen-xl mx-auto">
        {/* blog  */}
        <div className="py-20">
          <OurTitle subHeading={"BLOG POSTS"}></OurTitle>
          <h1 className="text-center text-4xl  text-white font-Jost">
            News & Update
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
