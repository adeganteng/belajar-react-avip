import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
    return (
      <form action="">
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

        <Button variant={"bg-blue-600 mb-6"} text={"Login"} />
      </form>
    );
}
export default FormLogin;