import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";
import Product from "../interfaces/Product";

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
          {productsOnCart.map((each: Product, index: number) => (
            <CartCard
              key={index}
              id={each.id}
              name={each.title}
              image={each.images[0]}
              description={each.description ? each.description : "Undefined"}
              price={each.price}
              quantity={each.units ? each.units : 0}
              color={each.colors ? each.colors[0] : "Undefined"}
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
