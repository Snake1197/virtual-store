import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Obtén el contenedor del DOM donde se montará tu aplicación
const container = document.getElementById("root");

// Asegúrate de que el contenedor no es null
if (container) {
  // Crea la raíz con createRoot
  const root = createRoot(container);

  // Renderiza la aplicación en la raíz
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se pudo encontrar el elemento con id 'root'");
}
