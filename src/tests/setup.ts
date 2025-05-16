import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { useApp } from '../core/app';

dotenv.config();

export const app = useApp();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI_TEST as string);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});
