import axios from 'axios';

const user = axios.create({
  baseURL: process.env.API_BASE_URL || '',
});

export default user;
