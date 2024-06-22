import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function NotFound() {
  return (
    <>
      <NavBar />
      <main className="grow w-full flex justify-center items-center p-[20px]">
        <section className="text-center py-[50px] px-0 bg-[#f4f4f4]">
          <h2 className="text-[36px] mb-[20px]">404 Not Found</h2>
          <p className="text-[18px]">
            Lo sentimos, la página que estás buscando no pudo ser encontrada.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
