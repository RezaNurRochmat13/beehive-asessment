import * as userRepository from '../repositories/user.repository';
import jwt from 'jsonwebtoken';
import { IUser } from '../models/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const register = async (email: string, password: string): Promise<IUser> => {
  return await userRepository.createUser({ email, password });
};

export const login = async (
  email: string,
  password: string
): Promise<{ user: IUser; token: string }> => {
  const user = await userRepository.findByEmail(email);
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: '1d'
  });

  return { user, token };
};
