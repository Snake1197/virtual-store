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
      <div className="flex-col w-[340px] p-[10px] m-[10px]">
        <div className="bg-[#ebebeb] p-[33px] rounded-[2px]">
          <span className="text-[#ff3b3c]">Total:</span>
          <h2 id="price" className="text-[28px] font-bold mt-[10px]">
            ${productPrice.toLocaleString()}
          </h2>
          <p className="leading-[20.4px] break-words">
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
            haciendo la solicitud en AFIP.
          </p>
          <ul className="p-0 list-none mb-[30px]">
            <li className="flex my-[15px] mx-0">
              <span className="mr-[15px]">
                <img src="/truck.png" alt="Truck" />
              </span>
              <span>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li className="flex my-[15px] mx-0">
              <span className="mr-[15px]">
                <img src="/plane.png" alt="Plane" />
              </span>
              <span>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                envío normal
              </span>
            </li>
          </ul>
          <div className="gap-y-[20px]">
            <div className="flex mb-[10px]">
              <input
                className="h-[40px] rounded-[10px] border-none w-[62px] mr-[10px] py-0 pr-[10px] pl-[20px] box-border"
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
                    ? "w-full bg-[#202020] text-white font-bold border-none h-[40px] rounded-[10px]"
                    : "w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-[10px] hover:bg-[#ff5151]"
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
