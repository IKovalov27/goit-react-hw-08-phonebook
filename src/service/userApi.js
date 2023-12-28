import { backend } from 'redux/BaseHttp/BaseHttp';

export const token = {
  set: token => {
    backend.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unSet: token => {
    backend.defaults.headers.Authorization = '';
  },
};

export const signUpUser = async credentials => {
  const { data } = await backend.post('users/signup', credentials);
  return data;
};

export const loginUser = async credentials => {
  const { data } = await backend.post('users/login', credentials);
  console.log(data);
  return data;
};

export const logoutUser = async () => {
  return backend.post('users/logout');
};

export const currentUser = async () => {
  const data = await backend.get('users/current');
  return data;
};
