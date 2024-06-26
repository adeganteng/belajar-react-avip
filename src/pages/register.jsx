import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayouts title={"Register"} type={"register"}>
      <FormRegister />
    </AuthLayouts>
  );
};

export default RegisterPage;
