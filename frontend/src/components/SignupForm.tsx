import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';

const SignupForm: React.FC = () => {
  const router = useRouter();
  const { authenticate, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setSignupError('Passwords do not match');
      return;
    }

    try {
      await authenticate(email, password, 'signup');
      router.push('/dashboard');
    } catch (err) {
      setSignupError(error || 'An error occurred');
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
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
        Signup
      </button>
      {signupError && <p className="text-red-500">{signupError}</p>}
    </form>
  );
};

export default SignupForm;
