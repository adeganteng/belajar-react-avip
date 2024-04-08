import { Link } from "react-router-dom";

const AuthLayouts = ({ title, children, type }) => {
  return (
    <div className="flex flex-col justify-center bg-slate-200 min-h-screen items-center">
      <div className="w-full max-w-xs p-5 rounded-md bg-white shadow-md">
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
