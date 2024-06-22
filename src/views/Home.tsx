import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Product from "../interfaces/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

interface ProductState {
  text: string;
  // Otros campos que definas en tu reducer de productos
}

interface RootState {
  products: ProductState;
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store: RootState) => store.products.text);
  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        const filterData = res.data.filter((each: Product) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <NavBar />
      <Hero first="tecnología" second="renovada" />
      <main className="grow w-full flex justify-center items-center p-[20px]">
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {products.map((each: Product, index: number) => (
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
      </main>
      <Footer />
    </>
  );
}

export default Home;
