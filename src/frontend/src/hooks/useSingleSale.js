import { useState, useEffect } from 'react';
import { saleService } from '../service/sales';

export function useSingleSale(saleId) {
  const [sale, setSale] = useState();

  useEffect(() => {
    const getSingleSale = async () => {
      const data = await saleService.getSingleSale(saleId);
      setSale(data);
    };

    getSingleSale();
  }, [saleId]);

  return { sale, setSale };
}
