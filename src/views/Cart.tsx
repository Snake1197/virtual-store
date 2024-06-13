import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";
function Cart() {
  //Inicializo el useState con lo encuentre en el storage, o en su defecto vacío.
  const [productsOnCart, setProductsOnCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProductsOnCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <>
      <NavBar search={false} />
      <Hero first="mi" second="carrito" />
      <main>
        <section className="flex flex-col">
          {productsOnCart.map((each, index: number) => (
            <CartCard
              key={index}
              id={each.id}
              name={each.title}
              image={each.images[0]}
              description={each.description}
              price={each.price}
              quantity={each.units}
              color={each.colors[0]}
            />
          ))}
        </section>

        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
