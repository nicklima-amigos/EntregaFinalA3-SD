import { useEffect, useState } from 'react';
import { API_URL } from '../constants';

export function useClients(clientId) {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    const response = await fetch(`${API_URL}/clients`);
    const data = await response.json();
    setClients(data);
  };

  const getSingleClient = async () => {
    const response = await fetch(`${API_URL}/clients/${clientId}`);
    const data = await response.json();
    setClients([data]);
  };

  useEffect(() => {
    if (!clientId) {
      getClients();
    } else {
      getSingleClient();
    }
  }, []);

  return {
    clients,
    setClients,
  };
}
