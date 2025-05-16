import { Request, Response } from 'express';
import * as authService from '../services/auth.service';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    res.status(201).json({ id: user._id, email: user.email });
  } catch (error: any) {
    if (error.code === 11000) {
      // Duplicate email
      res.status(409).json({ error: 'Email already registered' });
    }

    res.status(400).json({ error: error.message || 'Registration failed' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login(email, password);
    res.json({ user: { id: user._id, email: user.email }, token });
  } catch (error) {
    res.status(401).json({ error: (error as Error).message });
  }
};
