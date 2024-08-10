import { config } from 'dotenv';

config();

interface EnvVariables {
  PORT: string;
  JWT_SECRET: string;
  DATABASE_URL: string;
  BCRYPT_SALT_ROUNDS: string;
}

const getEnv = (): EnvVariables => {
  return {
    PORT: process.env.PORT || '3000',
    JWT_SECRET: process.env.JWT_SECRET || 'defaultsecret',
    DATABASE_URL: process.env.DATABASE_URL || 'sqlite:./database.sqlite',
    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS || '10',
  };
};

const env = getEnv();

export default env;
