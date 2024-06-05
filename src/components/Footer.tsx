import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer>
        <div id="footer" className={styles["footer-container"]}>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="/onsale">
                Ofertas
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Laptops
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Audio
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="/">
                Cómo comprar
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Formas de pago
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Envios
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="/">
                Costos y tarifas
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Impuestos
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Facturación
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="/">
                Mis pedidos
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Pedir nuevamente
              </a>
            </li>
            <li className={styles["footer-li"]}>
              <a className={styles["footer-a"]} href="/">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className={styles["footer-ul"]}>
            <li className={styles["footer-main-item"]}>
              <a className={styles["footer-a"]} href="/">
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

export default Footer;
