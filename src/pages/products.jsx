import CardProduct from "../components/Fragments/CardProduct";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";

const ProductsPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts />
      <div className="flex flex-row flex-wrap justify-center items-start gap-3">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.HeaderCard image={product.image} />
            <CardProduct.BodyCard
              title={product.title}
              description={product.description}
            />
            <CardProduct.FooterCard price={product.price} />
          </CardProduct>
        ))}
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description:
      "Adidas Y-3 adalah produk adidas yang sangat populer dan biasanya dipak Real Madrid",
    price: "Rp 1.000.000;",
  },
  {
    id: 2,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description:
      "Adidas Y-3 adalah produk adidas yang sangat populer dan biasanya dipak Real Madrid",
    price: "Rp 1.000.000;",
  },
  {
    id: 3,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description:
      "Adidas Y-3 adalah produk adidas yang sangat populer dan biasanya dipak Real Madrid",
    price: "Rp 1.000.000;",
  },
  {
    id: 4,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description:
      "Adidas Y-3 adalah produk adidas yang sangat populer dan biasanya dipak Real Madrid",
    price: "Rp 1.000.000;",
  },
  {
    id: 5,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description:
      "Adidas Y-3 adalah produk adidas yang sangat populer dan biasanya dipake Real Madrid pada jreseynya",
    price: "Rp 1.000.000;",
  },
  {
    id: 6,
    image: "/images/product-1.jpg",
    title: "Adidas Y-3",
    description: "Adidas Y-3 adalah produk adidas yang sangat populer yang dipake tim-tim besar",
    price: "Rp 1.000.000;",
  },
];

export default ProductsPage;
