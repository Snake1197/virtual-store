function Footer() {
  return (
    <>
      <footer className="min-h-64 bg-[#7525a7] flex flex-col items-center w-full">
        <div
          id="footer"
          className="
         flex-wrap flex w-full justify-around p-[10px]
        md:w-[1080px] md:justify-between md:items-left
        "
        >
          <ul className="list-none w-[170px] p-[10px]">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="/onsale">
                Ofertas
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Laptops
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Audio
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Auriculares
              </a>
            </li>
          </ul>
          <ul className="list-none w-[170px] p-[10px]">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="/">
                Cómo comprar
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Formas de pago
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Envios
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Devoluciones
              </a>
            </li>
          </ul>
          <ul className="list-none w-[170px] p-[10px]">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="/">
                Costos y tarifas
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Impuestos
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Facturación
              </a>
            </li>
          </ul>
          <ul className="list-none w-[170px] p-[10px]">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="/">
                Mis pedidos
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Pedir nuevamente
              </a>
            </li>
            <li className="py-[5px]">
              <a className="text-white no-underline" href="/">
                Lista de deseos
              </a>
            </li>
          </ul>
          <ul className="list-none w-[170px] p-[10px]">
            <li className="font-bold pb-[20px]">
              <a className="text-white no-underline" href="/">
                Garantía
              </a>
            </li>
          </ul>
        </div>
        <div
          className="
          w-full
          md:w-[1080px] border-t border-[#ba53fb] text-center text-white font-bold py-[30px] box-border"
        >
          Curso de HTML + CSS 2023
        </div>
      </footer>
    </>
  );
}

export default Footer;
