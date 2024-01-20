import { Link } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link to="services">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link to="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <a>Contact Us</a>
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <a>Dashboard</a>
        </Link>
      </li>
      <li className="bg-red text-white hover:bg-black">
        <a>Sign Out</a>
      </li>
    </>
  );
  return (
    <div className="fixed bg-white w-full">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base"
              >
                {navLink}
              </ul>
            </div>
            <Link to="/">
              <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold">
                <span className="text-red">W</span>ork{" "}
                <span className="text-red">T</span>oday
              </p>
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base">{navLink}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
