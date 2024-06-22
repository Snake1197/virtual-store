import Product from "../interfaces/ProductProp";

function ProductDescriptionDetail({ product }: Product) {
  return (
    <>
      <div className="flex-col w-[340px] p-[10px] m-[10px]">
        <h1 className="text-black text-[28px] font-bold overflow-wrap: break-word mt-0">
          {product.title}
        </h1>
        <form className="mt-[30px]">
          <fieldset className="border-none p-0 flex flex-col">
            <label className="text-black text-[12px] font-bold" htmlFor="color">
              Color
            </label>
            <select
              className="w-full h-[40px] bg-white rounded-[10px] border border-solid border-[#eaeaea] my-[10px] mx-0 p-[10px] box-border"
              id="color"
              defaultValue={product.colors ? product.colors[0] : "Undefined"}
            >
              {product.colors?.map((each, index) => (
                <option key={index} value={each}>
                  {each}
                </option>
              ))}
            </select>
          </fieldset>
        </form>
        <div className="mt-[30px] leading-5 text-[12px] font-normal text-[#383838] mb-[5px]">
          <span className="text-black text-[12px] font-bold">Descripción</span>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
export default ProductDescriptionDetail;
