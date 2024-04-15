import NavbarLayouts from "../components/Layouts/NavbarLayouts";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts />
      <div className="mt-20">
        <h1 className="text-center text-4xl text-slate-950 font-bold">
          Hello {username}
        </h1>
      </div>
    </div>
  );
};

export default ProfilePage;
