import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const data = [
    {
      product: "chair",
      price: 129,
      image:
        "https://images.unsplash.com/photo-1571898223382-0aa3499f0f2a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      product: "table",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1723501312096-5e468dbb5db9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      product: "lamp",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1558745909-9368b144feb8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [product,setProduct] = useState(data)

  return <Context.Provider value={[product]}>
    {children}
    </Context.Provider>;
};


export default ContextProvider