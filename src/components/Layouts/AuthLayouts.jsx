import FormLogin from "../Fragments/FormLogin";

const AuthLayouts = ({ title, children }) => {
  return (
    <div className="w-full max-w-xs p-5 rounded-md bg-white shadow-md">
      <h1 className="text-3xl font-bold mb-2 text-blue-700">{title}</h1>
      <p className="font-medium text-blue-950 mb-6">
        Welcome, please yours details
      </p>
      {children}
    </div>
  );
};

export default AuthLayouts;
