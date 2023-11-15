import { API_URL } from '../constants';
import { handleApiError } from './utils';

const createClient = async (client) => {
  const response = await fetch(`${API_URL}/clients`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(client),
  });
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
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
    return handleApiError(response);
  }
  return response.json();
};

const deleteClient = async (clientId) => {
  const response = await fetch(`${API_URL}/clients/${clientId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return handleApiError(response);
  }
};

const getClients = async () => {
  const response = await fetch(`${API_URL}/clients`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const getSingleClient = async (clientId) => {
  const response = await fetch(`${API_URL}/clients/${clientId}`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

export const clientService = {
  createClient,
  updateClient,
  deleteClient,
  getClients,
  getSingleClient,
};
