import styles from "./ProductCheckout.module.css";
import { useState, useRef, useEffect } from "react";

interface Product {
  id: string;
  price: number;
	//Adición de propiedad para ser utilizada
	units: number;
}
interface ProductCheckoutProp {
  product: Product;
}

function ProductCheckout({ product }: ProductCheckoutProp) {
	//Inicialización correcta de useRef
  const units = useRef<HTMLInputElement>(null);
  //Manejo de estados para la cantidad de productos
  const [quantity, setQuantity] = useState(1);

  //Manejo de estados para los estilos del botón "Añadir al carrito"
  const [button, setButton] = useState(false);
const storedProducts = localStorage.getItem("cart");
    let productsInStorage: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];
	//
	useEffect(() => {
	let productsOnCart : Product[] = [];
	if (storedProducts) {
		productsOnCart = storedProducts
      ? JSON.parse(storedProducts)
      : [];
	} else {
		localStorage.setItem("cart", JSON.stringify([]));
	}
	const one = productsOnCart.find((item) => item.id === product.id);
	if (one) {
		setQuantity(one.units);
		setButton(true);
	} else {
		setQuantity(1);
		setButton(false);
	}
	}, [product.id,storedProducts]);


  //Lógica para setear el LocalStorage el array de productos del carrito
  const manageCart = () => {
    const one = productsInStorage.find((each) => each.id === product.id);
    if (!one) {
      product.units = quantity;
      productsInStorage.push(product);
      setButton(true);
    } else {
      productsInStorage = productsInStorage.filter(
        (each) => each.id !== product.id
      );
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
          <span className={styles["checkout-total-label"]}>Total:</span>
          <h2 id="price" className={styles["checkout-total-price"]}>
            ${(product.price * quantity).toLocaleString()}
          </h2>
          <p className={styles["checkout-description"]}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
            haciendo la solicitud en AFIP.
          </p>
          <ul className={styles["checkout-policy-list"]}>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/truck.png" alt="Truck" />
              </span>
              <span className={styles["policy-desc"]}>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span className={styles["policy-icon"]}>
                <img src="/plane.png" alt="Plane" />
              </span>
              <span className={styles["policy-desc"]}>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className={styles["checkout-process"]}>
            <div className={styles["top"]}>
              <input
                type="number"
                min="1"
                ref={units}
                defaultValue={quantity}
								//Comprobación de units.current para evitar la alerte de que puede ser null
                onChange={() => {if (units.current) {setQuantity(Number(units.current.value))}}}
              />
              <button
                type="button"
                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                onClick={manageCart}
              >
                {button ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
