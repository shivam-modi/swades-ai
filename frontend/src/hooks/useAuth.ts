import { useState } from 'react';
import { login, signup } from '../services/authService';
import { setToken, clearToken, setUserId, clearUserId } from '../utils/authUtils';

const useAuth = () => {
  const [error, setError] = useState<string | null>(null);

  const authenticate = async (email: string, password: string, mode: 'login' | 'signup') => {
    try {
      const response = mode === 'login' ? await login(email, password) : await signup(email, password);
      setToken(response.data.token);
      setUserId(response.data.user_id)
      return response.data;
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred');
      throw err;
    }
  };

  const logout = () => {
    clearToken();
    clearUserId();
  };

  return { authenticate, logout, error };
};

export default useAuth;
