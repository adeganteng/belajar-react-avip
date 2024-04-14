import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";
import { getProduct } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);
  // useRef

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts products={products} />
      <div className="flex flex-row flex-wrap justify-center items-start gap-3 w-1/2">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.HeaderCard image={product.image} id={product.id} />
              <CardProduct.BodyCard
                title={product.title}
                description={product.description}
              />
              <CardProduct.FooterCard price={product.price} id={product.id} />
            </CardProduct>
          ))}
      </div>
      <div className="w-1/2 bg-slate-400 p-3">
        <h1 className="text-blue-700 font-bold text-3xl">Cart</h1>
        <TableCart products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;
