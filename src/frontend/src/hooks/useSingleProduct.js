import { useState, useEffect } from 'react';
import { productService } from '../service/products';

export function useSingleProduct(productId) {
  const [product, setProduct] = useState();

  useEffect(() => {
    const getSingleProduct = async () => {
      const data = await productService.getSingleProduct(productId);
      setProduct(data);
    };

    getSingleProduct();
  }, [productId]);

  return { product, setProduct };
}
