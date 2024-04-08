import Button from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="card md:w-80 bg-slate-700 shadow-md w-full">{children}</div>
  );
};

const HeaderCard = ({image}) => {
  return (
    <figure>
      <img src={image} alt="car!" />
    </figure>
  );
};

const BodyCard = ({title, description, price}) => {
  return (
    <div className="card-body">
          <h2 className="card-title text-slate-100 font-bold">{ title }</h2>
      <p className="text-slate-300 font-semibold">
        {description}
      </p>
      <div className="card-actions justify-between mt-3 items-center">
              <p className="text-slate-100 font-bold text-sm">{ price }</p>
        <Button variant={"bg-blue-500 text-white"} text={"Add to cart"} />
      </div>
    </div>
  );
};

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;

export default CardProduct;
