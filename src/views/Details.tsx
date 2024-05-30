import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ImagesProductDetails from "../components/ImagesProductDetails";
import ProductDescriptionDetail from "../components/ProductDescriptionDetail";
import ProductCheckout from "../components/ProductCheckout";
import Ofertas from "../components/Ofertas";
import { useParams } from "react-router-dom";
import products from "../assets/products";
function Details() {
  const { id } = useParams();
  const product = products.find((each) => each.id === id);
  if (product) {
    return (
      <>
        <NavBar search={false} />
        <main>
          <div className={styles["details-container"]}>
            <div id="details" className={styles["columns-container"]}>
              <ImagesProductDetails images={product.images} />
              <ProductDescriptionDetail
                title={product.title}
                colors={product.colors}
                description={product.description}
              />
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
