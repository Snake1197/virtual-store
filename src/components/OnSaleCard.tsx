import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

function OnSaleCard({ id, title, price, images }: Product) {
  return (
    <>
      <Link
        key={id}
        className="text-[#383838] rounded-2xl w-[230px] m-[15px] no-underline border-[1px] border-solid border-[#d2d2d2]"
        to={"/details/" + id}
      >
        <img
          className="w-full h-[250px] object-cover object-center rounded-t-2xl"
          src={images[0]}
          alt={id}
        />
        <div className="p-5 box-border border-t-[1px] border-[#d2d2d2]">
          <span className="text-[16px] font-semibold leading-[25px] block text-[#333545] break-words">
            {title}
          </span>
          <span className="font-semibold text-[#76757] text-[14px]">
            Desde{" "}
          </span>
          <span className="text-[14px] text-[#76757e] line-through">
            AR ${price}
          </span>
          <div className="flex mx-0 my-[5px] gap-[10px] items-center">
            <span className="font-bold text-[22px]">AR ${price}</span>
            <span className="text-[14px] font-bold text-[#1d8e69]">
              50% Off
            </span>
          </div>
          <div className="text-[12px] font-light text-[#1d8e69] mt-[15px]">
            ¡Compra y paga en pesos!
          </div>
        </div>
      </Link>
    </>
  );
}

export default OnSaleCard;
