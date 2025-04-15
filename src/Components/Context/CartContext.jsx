import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={[cartData,setCartData]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
