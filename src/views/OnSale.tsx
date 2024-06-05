import styles from "../App.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import products from "../assets/products";
import OnSaleCard from "../components/OnSaleCard";
function OnSale() {
  return (
    <>
      <NavBar search={true} />
      <main>
        <div className={styles["product-container"]} id="products">
          {products.map((each, index) => (
            <OnSaleCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              image={each.images[0]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default OnSale;
