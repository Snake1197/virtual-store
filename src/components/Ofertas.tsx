import products from "../assets/products";
import ProductCard from "../components/ProductCard";
function Ofertas() {
  const onsale = products.filter((each: products) => each.onsale);
  return (
    <>
      <div className="my-[20px] mx-0 justify-center">
        <h2 className="text-center text-[40px]">Ofertas de la semana</h2>
        <div
          id="product-container"
          className="w-full flex-wrap flex justify-between"
        >
          {onsale.map((each: products, index: number) => (
            <ProductCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              colors={each.colors}
              images={each.images}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ofertas;
