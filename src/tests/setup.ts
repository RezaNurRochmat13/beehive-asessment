import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { useApp } from '../core/app';

dotenv.config();

export const app = useApp();

let testConnection: mongoose.Connection;

beforeAll(async () => {
  if (!process.env.MONGO_URI_TEST) {
    throw new Error('MONGO_URI_TEST not found in .env');
  }

  testConnection = await mongoose.createConnection(process.env.MONGO_URI_TEST as string);

  // Optional: bersihkan DB test sebelum test jalan
  await testConnection.dropDatabase();
});

afterAll(async () => {
  if (testConnection) {
    await testConnection.close();
  }
});
