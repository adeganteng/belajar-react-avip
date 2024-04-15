import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = ({ title, children, type }) => {
  // const [isDarkMode, setIsDarkMode] = useContext(DarkMode);
   const { value: isDarkMode, setValue: setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex flex-col justify-center bg-slate-200 min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs p-5 rounded-md bg-white shadow-md">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          // onClick={() => setIsDarkMode(!isDarkMode)}
          onClick={() => setIsDarkMode((prevMode) => !prevMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-700">{title}</h1>
        <p className="font-medium text-blue-950 mb-6">
          Welcome, please yours details
        </p>
        {children}
        <p className="text-slate-500 font-normal text-sm">
          {type === "login"
            ? "Don't have an account "
            : "Already have an account "}
          {type === "login" && (
            <Link to="/register" className="text-blue-500 font-bold">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
