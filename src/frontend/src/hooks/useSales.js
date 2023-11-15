import { useEffect, useState } from 'react';
import { saleService } from '../service/sales';

export function useSales(detail = false) {
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

    if (detail) {
      getSalesInfo();
      return;
    }
    getSales();
    return;
  }, [detail]);

  return {
    sales,
    setSales,
  };
}
