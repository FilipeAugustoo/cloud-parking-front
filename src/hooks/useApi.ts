import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/user/validate-token/' + token);
    return response.data;
  },
  signin: async (username: string, password: string) => {
    const response = await api.post('/user/signin', { username, password });
    return response.data;
  },
  logout: async() => {
    const response = await api.post('/user/logout');
    return response.data;
  }
});