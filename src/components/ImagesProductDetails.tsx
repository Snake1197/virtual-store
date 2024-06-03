import styles from "./ImagesProductDetails.module.css";
import { useState, useEffect } from "react";

interface Product {
	title: string;
  images: string[];
}

interface ImagesProductDetailsProp{
	product: Product
}

function ImagesProductDetails({ product }: ImagesProductDetailsProp) {
	//uso de State para renderizar las fotos mini cuando cambie de producto
	const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
	
	//uso de Effect para renderizar la foto grande cuando cambie de producto
	useEffect(() => {
    setThumb(product.images[0] || "/mock1.jpg");
  }, [product]);
  return (
    <>
      <section className={styles["product-images-block"]}>
        <div className={styles["product-images"]}>
          {product.images.map(
            (each, index) =>
              (
                <img
                  key={index}
                  className={styles["mini-img"]}
                  src={each}
                  alt={product.title}
									onClick={() => setThumb(each)}
                />
              )
          )}
        </div>
        <img
          className={styles["big-img"]}
          id="big-img"
          src={thumb}
          alt={product.title}
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
