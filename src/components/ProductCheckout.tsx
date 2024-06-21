import styles from "./ProductCheckout.module.css";
import { useState, useRef, useEffect } from "react";
import productsActions from "../store/actions/products";
import { useDispatch } from "react-redux";
import Product from "../interfaces/Product";
import ProductProp from "../interfaces/ProductProp";

const { updateCart } = productsActions;

function ProductCheckout({ product }: ProductProp) {
  const dispatch = useDispatch();
  const units = useRef<HTMLInputElement>(null);
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(product.price);
  const [buttonText, setButtonText] = useState("Add to cart");
  const [productsInStorage, setProductsInStorage] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("cart");
    if (storedProducts) {
      const parsedProducts: Product[] = JSON.parse(storedProducts);
      setProductsInStorage(parsedProducts);
      const storedProduct = parsedProducts.find(
        (item) => item.id === product.id
      );
      if (storedProduct) {
        setQuantity(storedProduct.units || 1);
        setProductPrice(storedProduct.price || product.price);
        setButtonText("Remove from cart");
      } else {
        setQuantity(1);
        setProductPrice(product.price);
        setButtonText("Add to cart");
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [product.id, product.price]);

  const manageCart = () => {
    const updatedProducts: Product[] = [...productsInStorage];
    const existingProductIndex = updatedProducts.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedProducts.splice(existingProductIndex, 1);
      setQuantity(1);
      setProductPrice(product.price);
      setButtonText("Add to cart");
    } else {
      const newProduct = {
        ...product,
        units: quantity,
        price: product.price * quantity,
      };
      updatedProducts.push(newProduct);
      setQuantity(quantity);
      setProductPrice(product.price * quantity);
      setButtonText("Remove from cart");
    }

    localStorage.setItem("cart", JSON.stringify(updatedProducts));
    dispatch(updateCart(updatedProducts));
    setProductsInStorage(updatedProducts);
  };

  return (
    <>
      <div className={styles["product-checkout-block"]}>
        <div className={styles["checkout-container"]}>
          <span className={styles["checkout-total-label"]}>Total:</span>
          <h2 id="price" className={styles["checkout-total-price"]}>
            ${productPrice.toLocaleString()}
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
                value={quantity}
                onChange={(e) => {
                  const newQuantity = parseInt(e.target.value, 10);
                  setQuantity(newQuantity);
                  setProductPrice(product.price * newQuantity);
                }}
              />
              <button
                type="button"
                className={
                  buttonText === "Remove from cart"
                    ? styles["remove-btn"]
                    : styles["cart-btn"]
                }
                onClick={manageCart}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCheckout;
