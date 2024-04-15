import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProduct, getProduct } from "../services/product.service";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";
import { useLogin } from "../hooks/useLogin";
const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center pt-24 px-10">
      <NavbarLayouts products={products} />
      <div>
        {Object.keys(product).length > 0 && (
          <div className=" bg-slate-700 shadow-xl lg:w-3/4 w-full flex flex-col lg:flex-row  justify-center m-auto rounded-xl overflow-hidden ">
            <div className="lg:w-1/2 w-full h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" lg:w-1/2 w-full flex flex-col p-3 pt-5 justify-between">
              <div className="flex flex-col gap-y-4">
                <h1 className=" text-white text-4xl font-bold">
                  {product.title}
                </h1>
                <p className="text-slate-200 font-medium">
                  {product.description}
                </p>
                <p className="text-slate-50 text-3xl font-bold">
                  ${product.price}
                </p>
                <p className="text-slate-50 font-bold">
                  Review ({product.rating.rate}/{product.rating.count})
                </p>
                <p className="text-slate-300 font-thin">#{product.category}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-info">Buy</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProductPage;
