import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [storeData, setstoreData] = useState([]);


  return (
    <Context.Provider value={[storeData, setstoreData]}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
