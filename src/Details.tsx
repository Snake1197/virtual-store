import styles from "./Details.module.css";
import Footer from "./components/Footer";
import NavButton from "./components/NavButton";
function Details() {
  return (
    <>
      <header>
        <div className={styles["header-container"]}>
          <a href="./index.html" className={styles["header-logo"]}>
            <img
              className={styles["header-logo-img"]}
              src="/tiendamia-logo.svg"
              width="218"
              alt="Logo store"
            />
          </a>
          <ul className={styles["header-social"]}>
            <li id="facebook" className={styles["header-li"]}>
              <a className={styles["header-a"]} href="https://facebook.com">
                <img
                  className={styles["header-social-img"]}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/RJREFUaEPtmVuoVlUQx3//fMjESMkkSyi1XrIgUjSILlCQiBVKFIRgYFAaYWqJogVdoVCLKEXMCkQwhIioECqMMPNF8ckkugndMwpT8qlpj+wT3zlnX2avvT/kgPN2zl5z+a2Zvfas+cQIF43w+DkLcKYz2FkGzGwyMAe4GbgF8L975Yfs/59mz/cAuyX91AV8KwAzuwxYAcwFrmgY0FfAh8AGSQ6XJEkAZjYGWAesSfI6XOkJSc+m2GoMYGZ3AZuBSSkOK3SOAoslfdLEbhgg3/U3gHubOEhYu0XSQ1G9EICZTQA+Aq6NGm65zl/2eZJO1tmpBTCz84C9wHV1xjp+7hs2R9K/VXYjALuAuzsKzo/ObwAPajxwDnB1he31WRYeTwYws0eBl1oG7zv5NHBI0omhtszsSsCP1DK5Q9L7ZQ9LM2Bmfsr4bnkJpYgH+4Ckt6uUzexi4OeKNf5sqqRTRWuqALYDC1Miz3VuixyJAQA3t07Sc2GAPK1H8hpNYXhPkn8vaiUI8CdwqaR/hhoszICZvQYsrfWeWLe9akEAV3lY0qZagPzY/A0Y2wJgbNkZbmZP5aU5taH9g5JmRAA89e82NN67/Jiki4r0zcx7p+db2PYyGtTFDishM9sILG/h5Kiky0sADrT8IC6UtKPXdhHAZ8CNfQL4DiiEC/rbKGllHcDvgPc+qVKVge8Bv0OkygeS5tUBWKr1XK+fAIclTR/JAMclXVAH8HeDI/RA1qfMbJMxM/Pe3y9IETkpadDxXvQSe/8TPaO7AHgZWBaJ3nszSYPu3kUAX2RTg+uDBrsA2A3cHvS3T9INdSX0DjA/aLALgG+BKUF/uyTdUwfgY5INQYOtAMzsXKCwTS7xv0zSK3UAdReMXn2/iDw4xNkpSfuLAjAzL83RPc/8m/BWcLN82RRJ/i35X8q60a+BaQ0M9y7t13fgS0lXDY2pDGAtkDRoAvoF8JikYaVdBnA+8GvidbIfAH8Bl4QvNJ4mM1sPDGqcgiXVD4BnsvHKk0X+q+7EE4HDwIXBwAeWdQ3wI3CNJL9WDpPKuZCZ3Qp8fAYBfH50k6TPy2KIDLZeAFY1gOgyA6XTiIF4IgCjgJ0NpnNdAfgg2edKle19LUD+QjuEtxh3BjLRBUAoeI8lBDAQdPaLzJvA/TUQbQFelfRIYKNOL2kEkGdjAbANGFfiJBXARzmLJHl3GpbGADmEzzP9q3hfgacUgNezpm51tvN/hCPPFyYB9JSUt8GrfecA7yxdogA+/N0KvJj9IvNL08DDp1DEcD7NmwXMzjvGJUV6ZuajQR+t+MWk9GyP+OwUoInDrte2KqGug0mxdxYgZde61PkPoFiDQMAu40AAAAAASUVORK5CYII="
                />
              </a>
            </li>
            <li id="instagram" className={styles["header-li"]}>
              <a className={styles["header-a"]} href="https://instagram.com">
                <img
                  className={styles["header-social-img"]}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABJdJREFUaEPtmWmolkUUx3//VtoLsj2zpLCiD+20SLRQtEB9iII+tECIVGYbBaIVpQQtJmG0QLRQEEEUpBDRIhUSCvZBW2xTW6gwK0zLD9ppzmVeee69z/PMzH3ve28X7oH3yztnzsx/zn/OMo8Y46Ixvn/GAYy2B8c9MOY8YGaHANcAlwFHAYd3CeJ74DtgMfCypF9K7GVTyMx2A+YCM4EdSxYp0N0GPA7cK+mfnHlZAMzsQuBZ4Igco8Ogsw64QdIHKVtJAGZ2NvBRylCPxs+R9GGb7VYAkTZfjODJD9zrWuC4NjqlADwBzOjR6eaanS/pziblRgBm5nz3E+i1PA28A5wOTAP2q1lwoqQf6jbSBuAm4Mke736xJA/HfWJm84BZNWtOl/RMKYDngweu7wLAZuBrYC9gcoOdfvQwsyuAN2p0n5N0YykAv/1TCwH8GL3mJ7uycrL7BJqcCZwH3FWx6UnsBEkbowfeDRHv/Jo1l0g6txSAx+KJBQDmSpqT0jez40MGfwk4Keq6p14BzgJ8rE7WSjqyFMDvDReqzs4tkvrdFzPboRJ+10n6tzrRzBbErJ7C7OMbJO1fCsByLAMPSLqvQhfnu9+dq4Bj4v9fhnj+GvCCpDUV3WWhBjo1Y52NkpyGg6Q2CpmZ1zpbMww7hydL6tM1s8sjxz1718mScKkfk7Qo6jvYz4FdEmttkuTBIA9ANJ7jgRnBtQujvnP0xYyL7/XNdZ24bmavAlcnAPwlae9sAGa2O+CXq00c4ARJGyKA+4MTtlMpMXe2JI/57rXpwFPD6gEz2yNQYVPC6GpJUyp8XtUSRQaaWiHp5Ajg6NBffJVYa7OkPUs8sCuwJWF0qSQPfX6Kh8WyI7dP+FuSH1KfmNnPwEEt622TtFMJAA+B3ly0yXJJp1UAfJtxGTv2+nHazHyud3eNIqk24LTVQqlL/Kuk7admZiuAExOgO8OfSDojgvfw+GdqXhGAmIRSHvA1p0haHTfiRVjfxcyQuwOFHonzvER4PzFna7j0O2dTKBpOecDVZkl6KOofHDKvF4AXJTbjzbu3i+vjvDs8NyTmbJHkPfkg6YZCbmy9pAM6VmPvfBtwccOGPIEtkPRe3Py+wKchQ09KACjLAwUecNWHQ8t3TwWEA7oW8NL4WA8yMdu+6YmukzfiGu6NSzIo91uotSb0wgMdm7dL8uIsW8zMaeP0yZEhVaNe2x+aYz3qzAs10eyUfigdPPl5OZ1TxHXMrZFUG2bb7sBy4JTUhgaM/wR4bfSWpM8GzjUzb84fLbTp6sskec88SNoAOGe9uhyqeCnyTUyIBwKerYcqr0u6shRATngb6oZK582U5E88RR5wznmK/z/IJEne4uYDcE0zcz7fPMoIFobQ2/i4lnqZ8xLWnxa74W83+D0oeLnSWNrnPO56afB2N7voYu4FnazdZCMJIFLp0lCv+xPgSHnC+T5Nkj85tkoWgAjCG5AHgVt7/IHDM/qcYf3AUT2Cyicm94q/KnT7iclfAJfG38eS/kidenU82wMlRkdSdxzASJ52cSIb7c3lrD9OoZxT6qXOfxP4g0B5AWE+AAAAAElFTkSuQmCC"
                />
              </a>
            </li>
            <li id="cart" className={styles["header-li"]}>
              <a className={styles["header-a"]} href="./cart.html">
                <img
                  className={styles["header-social-img"]}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA81JREFUaEPtml2ITVEUx/9/UsjDiDFJHpQ8iAfNNCFfSV4YKUUzJOHVw0QKTT4ilDJ58UBpkq/yIIM3GV9NE0Z58aCRfGZGyseDByx3ZV/dtn3vuedjnzNz792vZ++11m//V3vts84hqmywynhRA650xWsK1xSusB2opXSFCfofTk1h3RIRkRGu9ACAXSSv2RxOhSsAWDl/A6gj+a0QupKBlXMayffVAjxEcko1pfQFkpvKAnYdWCJSD+ADgNHW8+Uk72R1yImIxvMVwHgrho0kL0YGNqf3DQCrLCPnSG7NEHgZAHvDtcpMJPklLvAGAJctI98B1JP8kQW0iBwHsNvy3UdyviueUBcPERkLYAjABMtYK0l7I1LhF5FnAOZazvaTPBQb2KT1WQDbLGO3SNqp7h3YnCuDDkfNuXgeJQW8FECPZewXgKkkVf3UhojoxqsAhUNjaCDpvC2GSmmjsK55o0XdctROsjM12r9X4KsA1lk+z5PcXCyO0MAG+giAvZbRfpKNaQGXKEdtJC8lDTwDwEuH0dkkn6cBLSKLAdyzfBUtR/l5kRQ2Kuuh0GQ5PEZyT0rArizrJbmwlP84wDsAnLKMvwMwvdiBkeRGiEg/gHmWzQ6Sh30B1wH4lMVVs0Q5aiL5xAuwSetuAKstBw8A3E5STYetWQBa7XLkejuy10ZOaQO8HsAVz3Dlmu8iuSVoclzgMQA+O66aQX59PF9BMjCzYgEblc8A2O6DIITN+ySXlDM/CWB1dLccZ57maMNuQbnX2tjARuXXWo4soMcAbnqCzJv9SPJ0GB9JAWvt22c5HiA5M0wwacxNCrjYVTOwLqYBWegjEWCT1n0Ami2AzlybpT1tKG8Xj0LDIuK6av4E0EhSuxLDYiSp8KRceXoLQNtA9tDu4QsPxD0k7WZESTeJAZu0PgFgpwewYiYPkjwQxl/SwJMBaIkaFyaIGHOzBTYqrwSgX+3SgM4e2EBr2/Soo2kfQ0zn0uEBnA8t12SbY3rG2vCze9lJwGd7aCVB4NtGooeW72CTsO8dWEROAmgDoCd4b65Oa6NPP8oFjjhrixn3Ciwi1wG0OJy3BEHHWVtqJ70Bi4j2urTn5RoPSS4qFlictUFp4xO4A4DzC57+cELS/rD+L1YRibw2S2DXy0Q+nsHci3tDCYUjr80SWDsgr3Iqj3IEUfK1UUQir80M2Ny49KeSLgu6m+SaoMBEJPLaTA6tgtuWqrVWfxID8DTodC4M1igdaW0mZSlIxSyeezuls4Apx2cNuJxdGslzagqPZPXKib3qFP4DPc5DTOx+iUAAAAAASUVORK5CYII="
                />
              </a>
            </li>
          </ul>
        </div>
        <nav id="navbar">
          <NavButton title="Ofertas" link="#" />
          <NavButton title="Cómo comprar" link="#" />
          <NavButton title="Costos y tarifas" link="#" />
          <NavButton title="Mis pedidos" link="#" />
          <NavButton title="Garantía" link="#" />
        </nav>
      </header>
      <main>
        <div className={styles["details-container"]}>
          <div id="details" className={styles["columns-container"]}>
            <section className={styles["product-images-block"]}>
              <div className={styles["product-images"]}>
                <img
                  className={styles["mini-img"]}
                  src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                  alt="MacBook Pro 13'4"
                />
                <img
                  className={styles["mini-img"]}
                  src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg"
                  alt="MacBook Pro 13'4"
                />
              </div>
              <img
                className={styles["big-img"]}
                id="big-img"
                src="https://i.postimg.cc/HxGQcrcp/mock1.jpg"
                alt="MacBook Pro 13'4"
              />
            </section>
            <div className={styles["product-description-block"]}>
              <h1 className={styles["product-title"]}>MacBook Pro 13'4</h1>
              <form className={styles["product-selector"]}>
                <fieldset className={styles["product-fieldset"]}>
                  <label className={styles["product-label"]} htmlFor="color">
                    Color
                  </label>
                  <select className={styles["product-select"]} id="color">
                    <option value="Silver">Silver</option>
                  </select>
                </fieldset>
              </form>
              <div className={styles["product-description"]}>
                <span className={styles["product-label"]}>Descripción</span>
                <p>
                  Experience the power of creativity with the MacBook Pro 13'4.
                  Featuring 8GB of RAM and 512GB of storage, this laptop
                  provides the performance and storage capacity needed for
                  demanding tasks. The sleek design in silver and space gray
                  adds a touch of sophistication. The high-resolution Retina
                  display brings your visuals to life, whether you're editing
                  photos, creating videos, or simply browsing the web. With the
                  latest technology and a lightweight build, the MacBook Pro
                  13'4 is the perfect companion for professionals and creative
                  individuals alike.
                </p>
              </div>
            </div>
            <div className={styles["product-checkout-block"]}>
              <div className={styles["checkout-container"]}>
                <span className={styles["checkout-total-label"]}>Total:</span>
                <h2 id="price" className={styles["checkout-total-price"]}>
                  $750000
                </h2>
                <p className={styles["checkout-description"]}>
                  Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                  50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={styles["checkout-policy-list"]}>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="/truck.png" alt="Truck" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Agrega el producto al carrito para conocer los costos de
                      envío
                    </span>
                  </li>
                  <li>
                    <span className={styles["policy-icon"]}>
                      <img src="/plane.png" alt="Plane" />
                    </span>
                    <span className={styles["policy-desc"]}>
                      Recibí aproximadamente entre 10 y 15 días hábiles,
                      seleccionando envío normal
                    </span>
                  </li>
                </ul>
                <div className={styles["checkout-process"]}>
                  <div className={styles["top"]}>
                    <input type="number" min="1" value="1" />
                    <button type="button" className={styles["cart-btn"]}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["sales-block"]}>
            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
            <div id="product-container" className={styles["product-container"]}>
              <a className={styles["product-card"]} href="./details.html">
                <img
                  className={styles["product-img"]}
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles["product-info"]}>
                  <span className={styles["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles["product-description"]}>Black</span>
                  <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>100000</span>
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
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles["product-info"]}>
                  <span className={styles["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles["product-description"]}>Black</span>
                  <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>100000</span>
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
                  src="https://i.postimg.cc/2ymFtsTn/kindle2.jpg"
                  alt="Kindle Paperwhite"
                />
                <div className={styles["product-info"]}>
                  <span className={styles["product-title"]}>
                    Kindle Paperwhite
                  </span>
                  <span className={styles["product-description"]}>Black</span>
                  <div className={styles["product-price-block"]}>
                    <span className={styles["product-price"]}>100000</span>
                    <span className={styles["product-discount"]}>50% Off</span>
                  </div>
                  <div className={styles["product-tax-policy"]}>
                    Incluye impuesto País y percepción AFIP
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
