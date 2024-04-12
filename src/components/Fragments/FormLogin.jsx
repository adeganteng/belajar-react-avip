import { useEffect, useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";


const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    console.log("login");
    console.log();
    window.location.href = "/products";
  };
  // penggunaa useRef
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  })
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label={"Email"}
        name="email"
        type="email"
        placeholder="example@gmail.com"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        name={"password"}
        type={"password"}
        placeholder={"*********"}
      />

      <Button type="submit" variant={"bg-blue-600 mb-6"} text={"Login"} />
    </form>
  );
};
export default FormLogin;
