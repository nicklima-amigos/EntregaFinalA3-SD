import { API_URL } from '../constants';

const createProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
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
    throw new Error('Something went wrong');
  }
  return response.json();
};

const deleteProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
};

const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
};

const getSingleProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
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
