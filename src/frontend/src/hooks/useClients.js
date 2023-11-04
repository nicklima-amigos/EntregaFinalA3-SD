import { useEffect, useState } from 'react';
import { clientService } from '../service/clients';

export function useClients(clientId) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const data = await clientService.getClients();
      setClients(data);
    };

    const getSingleClient = async () => {
      const data = await clientService.getSingleClient(clientId);
      setClients([data]);
    };
    if (!clientId) {
      getClients();
      return;
    }
    getSingleClient();
  }, [clientId]);

  return {
    clients,
    setClients,
  };
}
