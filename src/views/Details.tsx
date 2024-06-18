import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ImagesProductDetails from "../components/ImagesProductDetails";
import ProductDescriptionDetail from "../components/ProductDescriptionDetail";
import ProductCheckout from "../components/ProductCheckout";
import Ofertas from "../components/Ofertas";
import { useParams } from "react-router-dom";
import Product from "../interfaces/Product";
import axios from "axios";
import { useEffect, useState } from "react";

function Details() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios("/products.json")
      .then((res) => {
        const products: Array<Product> = res.data;
        const detailProduct = products.find((each) => each.id === id);
        setProduct(detailProduct || null);
      })
      .catch((err) => console.log(err));
  }, [id]);

  /*   const product = products.find((each: Product) => each.id === id);
   */ if (product) {
    return (
      <>
        <NavBar search={false} />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <ImagesProductDetails product={product} />
              <ProductDescriptionDetail product={product} />
              <ProductCheckout product={product} />
            </div>
            <Ofertas />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Details;
