import { useEffect, useState } from "react";
import { saleService } from "../service/sales";

export function useSales(saleId) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getSales = async () => {
      const data = await saleService.getSales();
      setSales(data);
    };

    const getSingleSale = async () => {
      const data = await saleService.getSingleSale(saleId);
      setSales([data]);
    };
    if (!saleId) {
      getSales();
      return;
    }

    getSingleSale();
  }, [saleId]);

  return {
    sales,
    setSales,
  };
}
