import bcrypt from 'bcrypt';
import env from '../config/env';

const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = parseInt(env.BCRYPT_SALT_ROUNDS, 10);
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export default { hashPassword, comparePassword };