import styles from "./OnSaleCard.module.css";
import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

function OnSaleCard({ id, title, price, images }: Product) {
  return (
    <>
      <Link key={id} className={styles["product-card"]} to={"/details/" + id}>
        <img className={styles["product-img"]} src={images[0]} alt={id} />
        <div className={styles["product-info"]}>
          <span className={styles["product-title"]}>{title}</span>
          <span className={styles["label-price-before"]}>Desde </span>
          <span className={styles["product-price-before"]}>AR ${price}</span>
          <div className={styles["product-price-block"]}>
            <span className={styles["product-price"]}>AR ${price}</span>
            <span className={styles["product-discount"]}>50% Off</span>
          </div>
          <div className={styles["product-call-to-action"]}>
            ¡Compra y paga en pesos!
          </div>
        </div>
      </Link>
    </>
  );
}

export default OnSaleCard;
