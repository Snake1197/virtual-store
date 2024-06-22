import { useState, useEffect } from "react";
import ProductProp from "../interfaces/ProductProp";

function ImagesProductDetails({ product }: ProductProp) {
  //uso de State para renderizar las fotos mini cuando cambie de producto
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");

  //uso de Effect para renderizar la foto grande cuando cambie de producto
  useEffect(() => {
    setThumb(product.images[0] || "/mock1.jpg");
  }, [product]);
  return (
    <>
      <section className="flex p-[10px] m-[10px] w-[340px]">
        <div className="w-11 m-[3px]">
          {product.images.map((each, index) => (
            <img
              key={index}
              className="w-[40px] h-[40px] object-cover"
              src={each}
              alt={product.title}
              onClick={() => setThumb(each)}
            />
          ))}
        </div>
        <img
          className="w-[280px] h-[280px] object-cover"
          id="big-img"
          src={thumb}
          alt={product.title}
        />
      </section>
    </>
  );
}
export default ImagesProductDetails;
