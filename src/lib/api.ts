import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.totee.link',
});

export const applyToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

export default api;
