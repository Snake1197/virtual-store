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
      <NavBar search={true} />
      <main>
        <a onClick={prevPage}>◀️</a>
        <div
          className="w-full h-[50px] bg-purple-800 text-white text-center"
          id="products"
        >
          {visibleProducts.map((each, index) => (
            <OnSaleCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              image={each.images[0]}
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
