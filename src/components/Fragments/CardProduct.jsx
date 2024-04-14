import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="max-w-xs card md:w-80 bg-slate-700 shadow-md h-96 flex flex-col justify-between">
      {children}
    </div>
  );
};

const HeaderCard = ({ image, id }) => {
  return (
    <figure className="w-full h-2/5 object-cover">
      <Link to={`/product/${id}`}>
        <img src={image} alt="car!" />
      </Link>
    </figure>
  );
};

const BodyCard = ({ title, description }) => {
  return (
    <div className="card-body">
      <h2 className="card-title text-slate-100 font-bold ">
        {title.substring(0, 20)}...
      </h2>
      <p className="text-slate-300 font-semibold text-clip ">
        {description.substring(0, 75)}...
      </p>
    </div>
  );
};

const FooterCard = ({ price,id }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-actions justify-between items-center px-5 pb-3">
      <p className="text-slate-100 font-bold text-sm">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
        ;
      </p>
      <Button
        variant={"bg-blue-500 text-white"}
        text={"Add to cart"}
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      />
    </div>
  );
};

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;
