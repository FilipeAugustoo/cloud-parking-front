import axios from 'axios';
import { Car } from 'types/Car';
import { UserCreate } from './../types/UserCreate';

const api = axios.create({
  baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/user/validate-token/' + token);
    return response.data;
  },
  signin: async(username: string, password: string) => {
    const response = await api.post('/user/signin', { username, password });
    return response.data;
  },
  signup: async(user: UserCreate) => {
    const response = await api.post('/user/signup', user);
    return response.data;
  },
  logout: async() => {
    const response = await api.post('/user/logout');
    return response.data;
  },
  findAllCars: async() => {
    const response = await api.get('/car');
    return response.data;
  },
  findByLicense: async(license: String) => {
    const response = await api.get('/car/' + license);
    return response.data;
  },
  createCar: async(car: Car) => {
    const response = await api.post('/car', car);
    return response.data;
  },
  entryCar: async(license: String) => {
    const response = await api.post('/parking/entry/' + license);
    return response.data;
  },
  exitCar: async(license: String) => {
    const response = await api.post('/parking/exit/' + license);
    return response.data;
  },
  findParking: async() => {
    const response = await api.get('/parking');
    return response.data;
  }
});