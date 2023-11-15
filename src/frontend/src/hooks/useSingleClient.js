import { useEffect } from 'react';
import { clientService } from '../service/clients';
import { useState } from 'react';

export function useSingleClient({ clientId }) {
  const [client, setClient] = useState();

  useEffect(() => {
    const getSingleClient = async () => {
      const data = await clientService.getSingleClient(clientId);
      setClient(data);
    };

    getSingleClient();
  });

  return { client, setClient };
}
