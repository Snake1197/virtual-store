import styles from "./NotFound.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <section className={styles["hero"]}>
          <h2>404 Not Found</h2>
          <p>
            Lo sentimos, la página que estás buscando no pudo ser encontrada.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
