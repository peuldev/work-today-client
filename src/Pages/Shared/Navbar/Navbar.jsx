const Navbar = () => {
  const navLink = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Services</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      <li className="bg-red text-white hover:bg-black">
        <a>Sign Out</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold">
          <span className="text-red">W</span>ork{" "}
          <span className="text-red">T</span>oday
        </p>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">{navLink}</ul>
      </div>
    </div>
  );
};

export default Navbar;
