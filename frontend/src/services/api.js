import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
  });

export default api;

export const registerUser = async (userData) => {
  const response = await api.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const registerProperty = async (propertyData, token) => {
  const response = await api.post(`${API_URL}/properties`, propertyData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const verifyProperty = async (propertyId, token) => {
  const response = await api.post(`${API_URL}/properties/verify`, { propertyId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const tokenizeProperty = async (propertyId, token) => {
  const response = await api.post(`${API_URL}/properties/tokenize`, { propertyId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
