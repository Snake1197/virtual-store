import styles from "./ProductDescriptionDetail.module.css";
import Product from "../interfaces/ProductProp";

function ProductDescriptionDetail({ product }: Product) {
  return (
    <>
      <div className={styles["product-description-block"]}>
        <h1 className={styles["product-title"]}>{product.title}</h1>
        <form className={styles["product-selector"]}>
          <fieldset className={styles["product-fieldset"]}>
            <label className={styles["product-label"]} htmlFor="color">
              Color
            </label>
            <select
              className={styles["product-select"]}
              id="color"
              defaultValue={product.colors ? product.colors[0] : "Undefined"}
            >
              {product.colors?.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className={styles["product-description"]}>
          <span className={styles["product-label"]}>Descripción</span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
export default ProductDescriptionDetail;
