import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import productsActions from "../store/actions/products";
import ProductProp from "../interfaces/ProductProp";
import Product from "../interfaces/Product";

const { calculateTotal, updateCart } = productsActions;

function CartCard({ product }: ProductProp) {
  const { id, title, total, colors, images, description, units } = product;
  const [subtotal, updateSubTotal] = useState(total);
  const dispatch = useDispatch();
  const unitsToBuy = useRef<HTMLInputElement>(null);

  const manageUnits = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (!Array.isArray(productsOnCart)) {
      productsOnCart = [];
    }
    const one = productsOnCart.find((each: Product) => each.id === id);
    if (one && unitsToBuy.current) {
      one.units = Number(unitsToBuy.current.value);
      one.total = Number(unitsToBuy.current.value) * one.price;
      localStorage.setItem("cart", JSON.stringify(productsOnCart));
      dispatch(calculateTotal({ products: productsOnCart }));
      updateSubTotal(Number(unitsToBuy.current.value) * one.price);
      dispatch(updateCart(productsOnCart));
    } else {
      console.error(
        "Producto no encontrado o referencia de unidades no válida"
      );
    }
  };

  return (
    <>
      <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center rounded-md px-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
        <img
          className="hidden lg:inline-block w-[140px] h-[140px] rounded-sm"
          src={images[0]}
          alt="ipad"
        />
        <div className="flex flex-col justify-start flex-grow">
          <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
            <span className="flex flex-col">
              <strong className="block lg:inline-block text-[16px]">
                {title}
              </strong>
              <span className="block lg:inline-block text-[12px]">
                - {colors ? colors[0] : "Undefined"}
              </span>
            </span>
            <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">
              {description}
            </p>
            <input
              className="w-[70px] rounded-sm border-1 border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
              type="number"
              name="quantity"
              defaultValue={units}
              ref={unitsToBuy}
              onChange={manageUnits}
              min="0"
              id={id}
            />
          </div>
          <strong className="text-start lg:text-end text-[14px] px-[10px]">
            AR$ ${subtotal}
          </strong>
        </div>
      </article>
    </>
  );
}

export default CartCard;
