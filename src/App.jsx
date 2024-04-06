import React, { Children } from "react";

// Menggunakan Class Component
// class Button extends React.Component{
//   render() {
//     return (
//       <button
//         className="h-10 px-6 font-semibold rounded-md bg-blue-700 text-white"
//         type="submit"
//       >
//         Buy Now
//       </button>
//     );
//   }
// }

// Menggunakan Functional Component
const ButtonBlack = ({children, variant }) => {
  return (
    <>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${variant ? variant : "bg-black"}  text-white`}
        type="submit"
      >
        {children ? children : "Uhuy"}
      </button>
    </>
  );
};

// Jika ingin warnanya berbeda kita bisa menggunakan tehnik PROPS
const Button = (props) => {
  console.log(props);
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${props.variant ? props.variant : "bg-emerald-900"} text-white`}
      type="submit"
    >
      {props.text ? props.text : "Submit"}
    </button>
  );
};

function App() {
  return (
    <div className="flex flex-col justify-center bg-slate-200 min-h-screen items-center">
      <h1 className="text-center text-3xl text-slate-950 font-bold">
        Ade Wicaksono
      </h1>
      <div className="flex gap-3 mt-3">
        <Button variant="bg-blue-700" text="Login"></Button>
        <Button variant="bg-red-700" text="Register"></Button>
        <Button variant="bg-zinc-700"></Button>
        <Button></Button>
        <ButtonBlack variant={`bg-green-700`}></ButtonBlack>
        <ButtonBlack variant={`bg-yellow-700`}> Mantap Cuy</ButtonBlack>
        <ButtonBlack></ButtonBlack>
      </div>
    </div>
  );
}

export default App;
