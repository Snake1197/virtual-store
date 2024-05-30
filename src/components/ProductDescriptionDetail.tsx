import styles from "./ProductDescriptionDetail.module.css";

interface ProductDescriptionDetailProp {
  title: string;
  colors: string[];
  description: string;
}

function ProductDescriptionDetail({
  title,
  colors,
  description,
}: ProductDescriptionDetailProp) {
  return (
    <>
      <div className={styles["product-description-block"]}>
        <h1 className={styles["product-title"]}>{title}</h1>
        <form className={styles["product-selector"]}>
          <fieldset className={styles["product-fieldset"]}>
            <label className={styles["product-label"]} htmlFor="color">
              Color
            </label>
            <select
              className={styles["product-select"]}
              id="color"
              defaultValue={colors[0]}
            >
              {colors.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className={styles["product-description"]}>
          <span className={styles["product-label"]}>Descripción</span>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
export default ProductDescriptionDetail;
