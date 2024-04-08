import CardProduct from "../components/Fragments/CardProduct";
import NavbarLayouts from "../components/Layouts/NavbarLayouts";

const ProductsPage = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col justify-center pt-24 px-10 md:px-0">
      <NavbarLayouts />
          <div className="flex flex-row flex-wrap justify-center gap-3">
              
        <CardProduct>
          <CardProduct.HeaderCard image={"/images/product-1.jpg"} />
          <CardProduct.BodyCard
            title={"Sepatu Adidas"}
            description={"Sepatu model Kekinian buat tambah keren"}
            price={"Rp 1.000.000;"}
          />
        </CardProduct>
        <CardProduct>
          <CardProduct.HeaderCard image={"/images/product-1.jpg"} />
          <CardProduct.BodyCard
            title={"Sepatu Adidas"}
            description={"Sepatu model Kekinian buat tambah keren"}
            price={"Rp 1.000.000;"}
          />
        </CardProduct>
        <CardProduct>
          <CardProduct.HeaderCard image={"/images/product-1.jpg"} />
          <CardProduct.BodyCard
            title={"Sepatu Adidas"}
            description={"Sepatu model Kekinian buat tambah keren"}
            price={"Rp 1.000.000;"}
          />
        </CardProduct>
        <CardProduct>
          <CardProduct.HeaderCard image={"/images/product-1.jpg"} />
          <CardProduct.BodyCard
            title={"Sepatu Adidas"}
            description={"Sepatu model Kekinian buat tambah keren"}
            price={"Rp 1.000.000;"}
          />
        </CardProduct>
        <CardProduct>
          <CardProduct.HeaderCard image={"/images/product-1.jpg"} />
          <CardProduct.BodyCard
            title={"Sepatu Adidas"}
            description={"Sepatu model Kekinian buat tambah keren"}
            price={"Rp 1.000.000;"}
          />
        </CardProduct>
      </div>
    </div>
  );
};

export default ProductsPage;
