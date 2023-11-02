import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants';

export function useClients(clientId) {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  const createClient = async (client) => {
    const response = await fetch(`${API_URL}/clients`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    navigate('/clientes');
  };

  const updateClient = async (id, client) => {
    const response = await fetch(`${API_URL}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(client),
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    navigate('/clientes');
  };

  const deleteClient = async (clientId) => {
    const response = await fetch(`${API_URL}/clients/${clientId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    navigate('/clientes');
  };

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
    createClient,
    updateClient,
    deleteClient,
  };
}
