import { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      let response = await fetch(
        "https://full-stack-ecommerce-mern.onrender.com/products"
      );
      let data2 = await response.json();
      setdata(data2);
    }
    fetchdata();
  }, []);

  return (
    <ProductsContext.Provider value={data} >{children}</ProductsContext.Provider>
  );
};
