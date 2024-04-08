import { Link } from "react-router-dom";

const email = localStorage.getItem("email");

const NavbarLayouts = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
  
  return (
    <div className="navbar bg-blue-400 text-primary-content w-11/12 px-8 m-auto rounded-full top-2 fixed left-0 right-0 shadow-sm z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link className="text-white">Home</Link>
            </li>
            <li>
              <Link to={"/product"} className="text-white">
                Product
              </Link>
            </li>
            <li>
              <Link className="text-white">About Me</Link>
            </li>
            {/* <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-slate-950">
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-slate-950 font-bold">Home</Link>
          </li>
          <li>
            <Link className="text-slate-950 font-bold">Product</Link>
          </li>
          {/* <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
          <li>
            <Link className="text-slate-950 font-bold">About Me</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between text-white">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link className="text-white">Settings</Link>
            </li>
            <li>
              <Link to={"/login"} className="text-white" onClick={handleLogout}>
                Logout
              </Link>
            </li>
            {email && (
              <li>
                <p className="text-center text-white text-sm font-thin">
                  {email}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayouts;
