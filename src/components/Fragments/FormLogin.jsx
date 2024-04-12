import { useState, useEffect, useRef } from "react";
import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";


const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    // console.log("login");
    // console.log();
      // window.location.href = "/products";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data)
      }
    });
  };
  // penggunaa useRef
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  })
  return (
    <form onSubmit={handleLogin}>
      {loginFailed && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm">{loginFailed}</span>
        </div>
      )}
      <InputForm
        label={"Username"}
        name="username"
        type="text"
        placeholder="example@gmail.com"
        ref={usernameRef}
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
