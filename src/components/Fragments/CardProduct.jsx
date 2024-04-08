import Button from "../Elements/Button/Button";

const CardProduct = ({ children }) => {
  return (
    <div className="card md:w-80 bg-slate-700 shadow-md w-full h-96 flex flex-col justify-between">{children}</div>
  );
};

const HeaderCard = ({image}) => {
  return (
    <figure>
      <img src={image} alt="car!"/>
    </figure>
  );
};

const BodyCard = ({title, description}) => {
  return (
    <div className="card-body">
          <h2 className="card-title text-slate-100 font-bold">{ title }</h2>
      <p className="text-slate-300 font-semibold text-clip">
        {description}
      </p>
    </div>
  );
};

const FooterCard = ({price}) => {
    return (
      <div className="card-actions justify-between items-center px-5 pb-3">
        <p className="text-slate-100 font-bold text-sm">{price}</p>
        <Button variant={"bg-blue-500 text-white"} text={"Add to cart"} />
      </div>
    );
}

CardProduct.HeaderCard = HeaderCard;
CardProduct.BodyCard = BodyCard;
CardProduct.FooterCard = FooterCard;

export default CardProduct;
