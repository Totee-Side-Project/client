import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.totee.link',
});

export default api;
