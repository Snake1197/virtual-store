import styles from "./ImagesProductDetails.module.css";

interface ImagesProductDetailsProp {
  images: string[];
}

function ImagesProductDetails({ images }: ImagesProductDetailsProp) {
  return (
    <>
      <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
          {images.map(
            (each, index) =>
              index > 0 && (
                <img
                  key={index}
                  className={styles["mini-img"]}
                  src={each}
                  alt="MacBook Pro 13'4"
                />
              )
          )}
        </div>
        <img
          className={styles["big-img"]}
          id="big-img"
          src={images[0]}
          alt="MacBook Pro 13'4"
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
