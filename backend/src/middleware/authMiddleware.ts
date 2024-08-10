import { Request, Response, NextFunction } from 'express';
import jwtHelper from '../utils/jwtHelper';

declare global {
  namespace Express {
    interface Request {
      userId?: number;
      headers: {
        'x-device-id': string;
      }
    }
  }
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  try {
    const decoded = jwtHelper.verifyToken(token);
    req.userId = (decoded as any).id; // Assuming id is part of the payload
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};
