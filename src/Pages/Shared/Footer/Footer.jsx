import {
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-2">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="gird lg:grid-cols-2  items-center justify-between">
          {/* logo  */}
          <div>
            <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold">
              <span className="text-red">W</span>ork{" "}
              <span className="text-red">T</span>oday
            </p>
          </div>
          {/* Subscribe  */}
          <div>
            <h1 className="lg:text-3xl text-xl font-semibold pb-5">
              Subscribe Now
            </h1>
          </div>
        </div>
        <hr className="my-12 text-grey" />

        {/* Copyright  */}
        <div className="lg:flex md:flex flex-row items-center justify-between">
          <p className="my-5">
            Copyright © 2021{" "}
            <Link to="/">
              <span className="text-red cursor-pointer">work today</span>
            </Link>{" "}
            All Rights Reserved.
          </p>
          {/* icon  */}
          <div className="lg:flex md:flex lg:gap-5  gap-2 items-center text-4xl my-5">
            <FaFacebookSquare className="my-2 text-white p-2 rounded-full hover:bg-white hover:text-red bg-red" />

            <FaTwitter className="my-2 text-white p-2 rounded-full hover:bg-white hover:text-red bg-red" />

            <FaLinkedin className="my-2 text-white p-2 rounded-full hover:bg-white hover:text-red bg-red" />

            <FaInstagram className="my-2 text-white p-2 rounded-full hover:bg-white hover:text-red bg-red" />
          </div>

          {/* Privacy */}
          <div className="ms-2">
            <ul className="lg:flex md:flex lg:gap-5 md:gap-2">
              <li>
                <a href="">Privacy & Policy</a>
              </li>
              <li>
                <a href="">Conditions</a>
              </li>
              <li>
                <a href="">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
