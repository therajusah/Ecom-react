import { createContext, useEffect, useState } from 'react';
import axiosInstance from './axiosInstance'; 

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      setProducts(data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
