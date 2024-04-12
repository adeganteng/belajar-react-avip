import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, } = props;
  return (
    <input
      type={type}
      name={name}
      className="text-sm border rounded-md w-full py-2 px-3 text-slate-800 placeholder:opacity-50 input-info bg-white"
      placeholder={placeholder}
      id={name}
      ref={ref}
    />
  );
})

export default Input;
