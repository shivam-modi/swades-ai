import jwt from 'jsonwebtoken';
import env from '../config/env';

interface JwtPayload {
  id: number;
  deviceId: string;
}

const generateToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn: '4h' });
};

const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
};

export default { generateToken, verifyToken };