import { API_URL } from '../constants';

const createSale = async (sale) => {
  const response = await fetch(`${API_URL}/sales`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(sale),
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
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
    throw new Error('Something went wrong');
  }
  return response.json();
};

const deleteSale = async (saleId) => {
  const response = await fetch(`${API_URL}/sales/${saleId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};

const getSales = async () => {
  const response = await fetch(`${API_URL}/sales`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
};

const getSingleSale = async (saleId) => {
  const response = await fetch(`${API_URL}/sales/${saleId}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
};

const getSalesInfo = async () => {
  const response = await fetch(`${API_URL}/sales/details`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
};

export const saleService = {
  createSale,
  updateSale,
  deleteSale,
  getSales,
  getSingleSale,
  getSalesInfo,
};
