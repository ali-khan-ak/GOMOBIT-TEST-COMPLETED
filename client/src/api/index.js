import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})


export const registerUser = (userData) => API.post('/user/signup',userData);
export const login = (userData) => API.post('/user/login',userData);
export const addUser = (userData) => API.post('/user/adduser',userData);
export const fetchUsers = () => API.get('/user/fetchusers');