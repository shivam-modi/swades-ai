import axios from "axios";

export const setToken = (token: string) => {
    sessionStorage.setItem('authToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };
  
  export const clearToken = () => {
    sessionStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
  };
  
  export const getToken = () => {
    return sessionStorage.getItem('authToken');
  };
  
  export const getUserId = () => sessionStorage.getItem('id');

  export const clearUserId = () => sessionStorage.removeItem('id');

  export const setUserId = (userId: string) => sessionStorage.setItem('id', userId);
