import { useEffect, useState } from "react";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";
import { useLogin } from "../hooks/useLogin";
import { getProduct } from "../services/product.service";

const ProfilePage = () => {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);
  const username = useLogin();
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts products={products} />
      <div className="mt-20">
        <h1 className="text-center text-4xl text-slate-950 font-bold">
          Hello {username}
        </h1>
      </div>
    </div>
  );
};

export default ProfilePage;
