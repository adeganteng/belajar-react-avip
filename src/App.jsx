import Button from "./components/Elements/Button/Button";

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
      </div>
    </div>
  );
}

export default App;
