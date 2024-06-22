import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import productsActions from "../store/actions/products";

const { calculateTotal } = productsActions;

function Cart() {
  //Inicializo el useState con lo encuentre en el storage, o en su defecto vacío.
  const [productsOnCart, setProductsOnCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setProductsOnCart(JSON.parse(savedCart));
      dispatch(calculateTotal({ products: JSON.parse(savedCart) }));
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="grow w-full flex justify-center items-center p-[20px]">
        <section className="flex flex-col">
          {productsOnCart.map((each: Product, index: number) => (
            <CartCard key={index} product={each} />
          ))}
        </section>

        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
