import { useEffect, useState } from 'react';
import { productService } from '../service/products';

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await productService.getProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return {
    products,
    setProducts,
  };
}
