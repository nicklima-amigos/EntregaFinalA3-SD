import { API_URL } from '../constants';
import { handleApiError } from './utils';

const createSale = async (sale) => {
  const response = await fetch(`${API_URL}/sales`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(sale),
  });
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const updateSale = async (id, sale) => {
  const response = await fetch(`${API_URL}/sales/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(sale),
  });
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const deleteSale = async (saleId) => {
  const response = await fetch(`${API_URL}/sales/${saleId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return handleApiError(response);
  }
};

const getSales = async () => {
  const response = await fetch(`${API_URL}/sales`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const getSingleSale = async (saleId) => {
  const response = await fetch(`${API_URL}/sales/${saleId}`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const getSalesDetails = async () => {
  const response = await fetch(`${API_URL}/sales/details`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

export const saleService = {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSingleSale,
  getSalesDetails,
};
