const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className="text-sm border rounded-md w-full py-2 px-3 text-slate-800 placeholder:opacity-50 input-info bg-white"
      placeholder={placeholder}
      id={name}
    />
  );
};

export default Input;
