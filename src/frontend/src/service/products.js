import { API_URL } from '../constants';
import { handleApiError } from './utils';

const createProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const deleteProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return handleApiError(response);
  }
};

const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

const getSingleProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`);
  if (!response.ok) {
    return handleApiError(response);
  }
  return response.json();
};

export const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
};
