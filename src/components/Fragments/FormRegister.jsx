import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label={"Full Name"}
        name="text"
        type="text"
        placeholder="Ade Wicaksono"
      />
      <InputForm
        label={"Email"}
        name="email"
        type="email"
        placeholder="example@gmail.com"
      />
      <InputForm
        label="Password"
        name={"password"}
        type={"password"}
        placeholder={"*********"}
      />
      <InputForm
        label="Confirm Password"
        name={"confirmpassword"}
        type={"password"}
        placeholder={"*********"}
      />

      <Button variant={"bg-blue-600 mb-6"} text={"Register"} />
    </form>
  );
};
export default FormRegister;
