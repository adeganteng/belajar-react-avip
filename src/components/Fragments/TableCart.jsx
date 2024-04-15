import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const { value: isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch()
  const {total} = useTotalPrice()

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        }
      })
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th
            className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}
          >
            Name
          </th>
          <th
            className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}
          >
            Price
          </th>
          <th
            className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}
          >
            Qty
          </th>
          <th
            className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}
          >
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            // if (!product) return null; // Add this line to handle undefined product
            return (
              <tr key={item.id}>
                <td className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>{product.title}</td>
                <td className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>
                  $
                  {product.price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>{item.qty}</td>
                <td className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>
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
            <b className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>Total Price</b>
          </td>
          <td>
            <b className={`text-slate-950 text-sm ${isDarkMode && " text-white"}`}>
              $
              {total.toLocaleString("id-ID", {
                styles: "currency",
                currency: "USD",
              })}
              ;
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
