import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title={"Register"}>
      <FormRegister />
      <p className="text-slate-500 font-normal text-sm">
        Already an account,{" "}
        <Link to="/login" className="text-blue-500 font-bold">
          Log in
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
