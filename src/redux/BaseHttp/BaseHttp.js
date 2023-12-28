import axios from 'axios';

export const backend = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});
