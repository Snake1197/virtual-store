import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useEffect } from "react";
import Product from "../interfaces/Product";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../store/actions/products";

const { calculateTotal, updateCart } = productsActions;

interface ProductState {
  cart: Product[];
}

interface RootState {
  products: ProductState;
}

function Cart() {
  const dispatch = useDispatch();
  const productsOnCart = useSelector((state: RootState) => state.products.cart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const products = JSON.parse(savedCart);
      dispatch(updateCart(products));
      dispatch(calculateTotal({ products }));
    }
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="grow w-full flex justify-center items-start p-[20px]">
        <section className="flex flex-col">
          {productsOnCart.length > 0 ? (
            productsOnCart.map((each, index) => (
              <CartCard key={index} product={each} />
            ))
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </section>
        <CartResume />
      </main>
      <Footer />
    </>
  );
}

export default Cart;
