import { Request, Response } from 'express';
import _ from 'lodash';
import bcryptHelper from '../utils/bcryptHelper';
import {createUser, findUserByEmail} from "../services/authService"
import jwtHelper from '../utils/jwtHelper';

// Register a new user
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const deviceId = req.headers['x-device-id'];
    if(!_.isString(deviceId)) {
      return res.status(403).json({ message: 'Invalid Headers' });
    }
    const passwordHash = await bcryptHelper.hashPassword(password);
    const user = await createUser(email, passwordHash);
    const token = jwtHelper.generateToken({ id: user.id, deviceId: deviceId.toString() });

    res.status(201).json({ token, user_id: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Log in a user
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);
    if (!user || !(await bcryptHelper.comparePassword(password, user.passwordHash))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const deviceId = req.headers['x-device-id'];
    if(!_.isString(deviceId)) {
      return res.status(403).json({ message: 'Invalid Headers' });
    }
    const token = jwtHelper.generateToken({ id: user.id, deviceId: deviceId });
    res.json({ token, user_id: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
