import { useEffect, useState } from 'react';
import { clientService } from '../service/clients';

export function useClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const data = await clientService.getClients();
      setClients(data);
    };

    getClients();
  }, []);

  return {
    clients,
    setClients,
  };
}
