import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvider } from "./components/context/NavModalContext.jsx";
import { CartProvider } from "./components/context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ModalProvider>
  </React.StrictMode>
);
