import api from './api';

export const login = (email: string, password: string) => {
  return api.post('v1/auth/login', { email, password });
};

export const signup = (email: string, password: string) => {
  return api.post('v1/auth/signup', { email, password });
};
