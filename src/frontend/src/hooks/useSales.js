import { useEffect, useState } from 'react';
import { saleService } from '../service/sales';

export function useSales(saleId, detail = false) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await saleService.getSales();
      setSales(data);
    };

    const getSalesInfo = async () => {
      const data = await saleService.getSalesInfo();
      setSales(data);
    };

    const getSingleSale = async () => {
      const data = await saleService.getSingleSale(saleId);
      setSales([data]);
    };

    if (!saleId) {
      if (detail) {
        getSalesInfo();
        return;
      }
      getSales();
      return;
    }

    getSingleSale();
  }, [saleId, detail]);

  return {
    sales,
    setSales,
  };
}
