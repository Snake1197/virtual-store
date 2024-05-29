import styles from "./App.module.css";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <section className={styles["hero-section"]}>
        <article className={styles["hero-title"]}>
          <span className={styles["hero-span"]}>tecnología</span>
          <span className={styles["hero-span"]}>renovada</span>
        </article>
      </section>
      <main>
        <div className={styles["product-container"]} id="products">
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
          <a className={styles["product-card"]} href="./details.html">
            <img
              className={styles["product-img"]}
              src="https://i.postimg.cc/kX8PKZpq/ipad2.jpg"
              alt="iPad Pro 12.9"
            />
            <div className={styles["product-info"]}>
              <span className={styles["product-title"]}>iPad Pro 12.9</span>
              <span className={styles["product-description"]}>Silver</span>
              <div className={styles["product-price-block"]}>
                <span className={styles["product-price"]}>900000</span>
                <span className={styles["product-discount"]}>50% Off</span>
              </div>
              <div className={styles["product-tax-policy"]}>
                Incluye impuesto País y percepción AFIP
              </div>
            </div>
          </a>
        </div>
      </main>
      <footer>
        <div id="footer" className={styles["footer-container"]}>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Ofertas
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Laptops
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Audio
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Cómo comprar
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Formas de pago
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Envios
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Costos y tarifas
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Impuestos
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Facturación
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Mis pedidos
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Pedir nuevamente
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="./index.html">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div className={styles["footer-copyright"]}>
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
}

export default App;
