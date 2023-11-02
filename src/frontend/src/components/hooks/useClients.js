import { useEffect, useState } from 'react';

export function useClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('http://localhost:8000/clients');
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  return {
    clients,
  };
}
