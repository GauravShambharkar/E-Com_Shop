// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Components/Context/Context.jsx";
import CartProvider, { CartContext } from "./Components/Context/CartContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <CartProvider>
      <BrowserRouter>
        {/* <StrictMode> */}
        <App />
        <ToastContainer/>

        {/* </StrictMode> */}
      </BrowserRouter>
    </CartProvider>
  </ContextProvider>
);
