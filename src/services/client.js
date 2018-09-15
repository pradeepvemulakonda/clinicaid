import axios from 'axios';

const client = axios.create({
  baseURL: '/',
  timeout: 1000
});

export default client;
