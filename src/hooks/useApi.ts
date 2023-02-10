import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  validateToken: async (token: string) => {

  },
  signin: async (username: string, password: string) => {
    const response = await api.post('/')
  },
  logout: async() => {

  }
});