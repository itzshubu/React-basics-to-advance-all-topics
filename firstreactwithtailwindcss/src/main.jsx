import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { ProductsContextProvider } from "./store/ProductContext";
import { CartContextProvider } from "./store/CartContext";
import App from "./App2";

createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
  </ProductsContextProvider>
);
