import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ImagesProductDetails from "../components/ImagesProductDetails";
import ProductDescriptionDetail from "../components/ProductDescriptionDetail";
import ProductCheckout from "../components/ProductCheckout";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import OnSaleCard from "../components/OnSaleCard";

function Details() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const [onSaleProducts, getProductOnSale] = useState<Product[] | null>(null);

  useEffect(() => {
    axios("/products.json")
      .then((res) => {
        const products: Array<Product> = res.data;
        const detailProduct = products.find((each) => each.id === id);
        const onSaleProducts = products.filter((each) => each.onsale);
        setProduct(detailProduct || null);
        getProductOnSale(onSaleProducts || null);
      })
      .catch((err) => console.log(err));
  }, [id]);

  /*   const product = products.find((each: Product) => each.id === id);
   */ if (product) {
    return (
      <>
        <NavBar />
        <main className="grow w-full flex justify-center items-center p-[20px] flex-col">
          <div className="w-[1080px] flex flex-wrap justify-between">
            <div id="details" className="flex justify-center flex-wrap">
              <ImagesProductDetails product={product} />
              <ProductDescriptionDetail product={product} />
              <ProductCheckout product={product} />
            </div>
          </div>
          <div className="my-[20px] mx-0 justify-center">
            <h2 className="text-center text-[40px]">Ofertas de la semana</h2>
            <div
              id="product-container"
              className="w-[1080px] grid grid-cols-4 justify-between"
            >
              {onSaleProducts
                ? onSaleProducts.map((each, index: number) => (
                    <OnSaleCard
                      key={index}
                      id={each.id}
                      title={each.title}
                      price={each.price}
                      colors={each.colors}
                      images={each.images}
                    />
                  ))
                : "undefined"}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Details;
