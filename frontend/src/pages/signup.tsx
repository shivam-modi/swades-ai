import SignupForm from '@/components/SignupForm';
import { NextPage } from 'next';

const Signup: NextPage = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
