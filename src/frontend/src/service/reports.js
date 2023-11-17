import { API_URL } from '../constants';
import { handleApiError } from './utils';

const getProductsByClient = async (id) => {
  const response = await fetch(`${API_URL}/reports/products-by-client/${id}`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.blob();
};

const getClientsAverageConsumption = async () => {
  const response = await fetch(
    `${API_URL}/reports/clients-average-consumption`
  );
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.blob();
};

const getDepletingProducts = async () => {
  const response = await fetch(`${API_URL}/reports/depleting-products`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.blob();
};

const getBestSellers = async () => {
  const response = await fetch(`${API_URL}/reports/best-sellers`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.blob();
};

export const reportService = {
  getProductsByClient,
  getClientsAverageConsumption,
  getBestSellers,
  getDepletingProducts,
};
