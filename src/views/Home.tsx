import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../assets/products";
function Home() {
  return (
    <>
      <NavBar search={true} />
      <Hero first="tecnología" second="renovada" />
      <main>
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {products.map((each, index) => (
            <ProductCard
              key={index}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.colors[0]}
              image={each.images[0]}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
