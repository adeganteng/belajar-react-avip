import Input from "./Input";
import Label from "./Label";

const InputForm = ({ label, name, type, placeholder }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}  />
    </div>
  );
};

export default InputForm;
