import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";

const NavbarLayouts = ({ products }) => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { value: isDarkMode, setValue: setIsDarkMode } = useContext(DarkMode);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
  };

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
              <Link to={"/"} className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"} className="text-white">
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
            <Link to={"/"} className="text-slate-950 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/products"} className="text-slate-950 font-bold">
              Product
            </Link>
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
        {/* Cart */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">{totalCart}</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg text-white">
                {totalCart} Items
              </span>
              <span className="text-info">Subtotal: ${totalPrice}</span>
              {/* <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div> */}
            </div>
          </div>
        </div>
        {/* Profile */}
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
              <Link to={"/profile"} className="justify-between text-white">
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
            <li>
              <p className="text-center text-blue-500 text-sm font-bold">
                {username}
              </p>
            </li>
            <li>
              <button
                className=" bg-blue-600 p-2 text-white rounded"
                // onClick={() => setIsDarkMode(!isDarkMode)}
                onClick={() => setIsDarkMode((prevMode) => !prevMode)}
              >
                {isDarkMode ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayouts;
