import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

function ProductCard({ id, title, price, colors = [], images }: Product) {
  return (
    <>
      <Link
        key={id}
        className="bg-[#f0f0f0] text-[#383838] rounded-[15px] w-[250px] m-[15px] no-underline justify-self-center"
        to={"/details/" + id}
      >
        <img
          className="w-full h-[250px] object-cover object-center rounded-t-[15px]"
          src={images[0]}
          alt={id}
        />
        <div className="p-[20px] box-border">
          <span className="text-[20px] font-bold leading-[25px] break-words block">
            {title}
          </span>
          <span className="text-[12px] font-normal text-[#383838] mb-[5px]">
            {colors[0]}
          </span>
          <div className="flex my-[5px] mx-0 justify-between items-center">
            <span className="text-[20px] font-bold">{price}</span>
            <span className="text-[12px] font-bold text-[#428f13]">
              50% Off
            </span>
          </div>
          <div className="text-[10px] font-light">
            Incluye impuesto País y percepción AFIP
          </div>
        </div>
      </Link>
    </>
  );
}
export default ProductCard;
