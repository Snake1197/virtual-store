import { useSelector } from "react-redux";

interface ProductState {
  text: string;
  total: number;
  subtotal: number;
  // Otros campos que definas en tu reducer de productos
}

interface RootState {
  products: ProductState;
}

function CartResume() {
  const total = useSelector((store: RootState) => store.products.total);
  return (
    <>
      <div className="w-[340px] h-[220px] flex flex-col justify-between rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
        <div className="flex-grow flex flex-col justify-between">
          <h2 className="text-[20px] font-bold"> Resumen del pedido</h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong>${total}</strong>
          </div>
          <small className="pb-[10px]">
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button
          className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-md"
          id="buy"
          type="button"
        >
          COMPRAR
        </button>
      </div>
    </>
  );
}

export default CartResume;
