import { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";
import { getProduct } from "../services/product.service";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length >0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    getProduct((data) => {
      setProducts(data)
    });
  }, []);
  // useRef
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <div className="bg-slate-200 min-h-screen flex justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts />
      <div className="flex flex-row flex-wrap justify-center items-start gap-3 w-1/2">
        {products.length > 0 &&
          products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.HeaderCard image={product.image} />
              <CardProduct.BodyCard
                title={product.title}
                description={product.description}
              />
              <CardProduct.FooterCard
                price={product.price}
                handleAddToCart={handleAddToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
      </div>
      <div className="w-1/2 bg-slate-400 p-3">
        <h1 className="text-blue-700 font-bold text-3xl">Cart</h1>

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-slate-950 text-sm">Name</th>
              <th className="text-slate-950 text-sm">Price</th>
              <th className="text-slate-950 text-sm">Qty</th>
              <th className="text-slate-950 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.length > 0 && cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              // if (!product) return null; // Add this line to handle undefined product
              return (
                <tr key={item.id}>
                  <td className="text-slate-950 text-sm">{product.title}</td>
                  <td className="text-slate-950 text-sm">
                    $
                    {product.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                  <td className="text-slate-950 text-sm">{item.qty}</td>
                  <td className="text-slate-950 text-sm">
                    $
                    {(item.qty * product.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </td>
                </tr>
              );
            })}
            <tr ref={totalPriceRef}>
              <td colSpan={3}>
                <b className="text-slate-950 text-sm">Total Price</b>
              </td>
              <td>
                <b className="text-slate-950 text-sm">
                  $
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                  ;
                </b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
