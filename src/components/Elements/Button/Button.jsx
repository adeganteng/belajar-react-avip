const Button = ({ variant, text, onClick = () => {}, type = "button" }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${
        variant ? variant : "bg-emerald-900"
      } text-white`}
      type={type}
      onClick={onClick}
    >
      {text ? text : "Submit"}
    </button>
  );
};

export default Button;
