import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <AuthLayouts title={"Login"}>
      <FormLogin />
      <p className="text-slate-500 font-normal text-sm">
        Don't have an account,{" "}
        <Link to="/register" className="text-blue-500 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
