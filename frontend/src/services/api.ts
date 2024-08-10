import { getToken } from '@/utils/authUtils';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const deviceId = uuidv4();
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'x-device-id': deviceId,
  },
});

const setAuthHeader = () => {
  if (typeof window !== 'undefined') {
    const token = getToken();
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }
};

setAuthHeader();

export default api;
