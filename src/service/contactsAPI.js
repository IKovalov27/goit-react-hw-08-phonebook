/*import axios from 'axios';
const { backend } = 'https://642dff8f2b883abc64053db5.mockapi.io';
export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com'
  baseURL: 'https://642dff8f2b883abc64053db5.mockapi.io/api/v1'
});

export const getContacts = async () => {
  const { data } = await backend.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await backend.post('contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await backend.delete(`/contacts/${id}`);
  return data;
};

export const updContacts = async id => {
  const { data } = await backend.patch(`/contacts/${id}`);
  return data;
};*/





import axios from 'axios';
import { backendAPI } from 'redux/BaseHttp/BaseHttp';
export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await backendAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await backendAPI.post('contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await backendAPI.delete(`/contacts/${id}`);
  return data;
};

export const updContacts = async id => {
  const { data } = await backendAPI.patch(`/contacts/${id}`);
  return data;
};