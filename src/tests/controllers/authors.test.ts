import request from 'supertest';
import { app } from '../setup';

let authorId = '';

describe('Authors Endpoints', () => {
  it('should create a new author', async () => {
    const res = await request(app)
      .post('/api/authors')
      .send({
        name: 'John Doe',
        bio: 'Famous author',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name', 'John Doe');
    authorId = res.body._id;

    // Simpan id utk dipakai test lain (optional)
    (global as any).authorId = authorId;
  });

  it('should get all authors', async () => {
    const res = await request(app)
      .get('/api/authors')
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
