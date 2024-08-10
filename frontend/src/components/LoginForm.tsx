import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';

const LoginForm: React.FC = () => {
  const router = useRouter();
  const { authenticate, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await authenticate(email, password, 'login');
      router.push('/dashboard');
    } catch (err) {
      setLoginError(error || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        Login
      </button>
      {loginError && <p className="text-red-500">{loginError}</p>}
    </form>
  );
};

export default LoginForm;
