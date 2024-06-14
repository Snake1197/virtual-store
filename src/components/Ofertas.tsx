import styles from "./Ofertas.module.css";
import products from "../assets/products";
import ProductCard from "../components/ProductCard";
function Ofertas() {
  const onsale = products.filter((each: products) => each.onsale);
  return (
    <>
      <div className={styles["sales-block"]}>
        <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
        <div
          id="product-container"
          className="w-full h-[50px] bg-purple-800 text-white text-center"
        >
          {onsale.map((each: products, index: number) => (
            <ProductCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ofertas;
