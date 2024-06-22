import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import products from "../assets/products";
import OnSaleCard from "../components/OnSaleCard";
import { useState } from "react";
function OnSale() {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(4);
  const onsale = products.filter((each) => each.onsale);
  const visibleProducts = onsale.slice(from, to);

  const nextPage = () => {
    if (to < products.length) {
      setFrom(from + 4);
      setTo(to + 4);
    }
  };

  // Función para ir a la página anterior
  const prevPage = () => {
    if (from > 0) {
      setFrom(from - 4);
      setTo(to - 4);
    }
  };

  return (
    <>
      <NavBar />
      <main className="grow w-full flex justify-center items-center p-[20px]">
        <a onClick={prevPage}>◀️</a>
        <div
          className="w-[1080px] h-[480px] flex flex-wrap gap-[10px] p-1"
          id="products"
        >
          {visibleProducts.map((each, index) => (
            <OnSaleCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              images={each.images}
            />
          ))}
        </div>
        <a onClick={nextPage}>▶️</a>
      </main>
      <Footer />
    </>
  );
}

export default OnSale;
