import { useState, useEffect } from 'react';
import { saleService } from '../service/sales';

export function useSalesDetails() {
  const [salesDetails, setSalesDetails] = useState([]);

  useEffect(() => {
    const getSalesDetails = async () => {
      const data = await saleService.getSalesDetails();
      setSalesDetails(data);
    };

    getSalesDetails();
  }, []);

  return { salesDetails, setSalesDetails };
}
