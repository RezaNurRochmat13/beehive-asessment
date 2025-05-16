import request from 'supertest';
import { app } from '../setup';

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      email: 'testuser@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('email', 'testuser@example.com');
  });

  it('should login and get token', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'testuser@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');

    // Simpan token untuk dipakai di test lain, bisa pakai global variable:
    (global as any).token = res.body.token;
  });
});
