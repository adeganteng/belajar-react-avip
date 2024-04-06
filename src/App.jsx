import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <div className="flex flex-col justify-center bg-slate-200 min-h-screen items-center">
      <h1 className="text-center text-3xl text-slate-950 font-bold mb-8">
        Ade Wicaksono
      </h1>
      <RegisterPage />
    </div>
  );
}

export default App;
