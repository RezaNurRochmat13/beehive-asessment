import request from 'supertest';
import { app } from '../setup';

describe('Books Endpoints', () => {
  let bookId = '';

  it('should create a new book', async () => {
    const res = await request(app)
      .post('/api/books')
      .set('Authorization', `Bearer ${(global as any).token}`)
      .send({
        title: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet',
        author: (global as any).authorId,
        publishedYear: 2020,
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('title', 'Lorem Ipsum');
    bookId = res.body._id;

    (global as any).bookId = bookId;
  });

  it('should get all books with pagination', async () => {
    const res = await request(app)
      .get('/api/books?page=1&limit=10')
      .set('Authorization', `Bearer ${(global as any).token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('total');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('should get book by id', async () => {
    const res = await request(app)
      .get(`/api/books/${(global as any).bookId}`)
      .set('Authorization', `Bearer ${(global as any).token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id', (global as any).bookId);
  });

  it('should update book by id', async () => {
    const res = await request(app)
      .put(`/api/books/${(global as any).bookId}`)
      .set('Authorization', `Bearer ${(global as any).token}`)
      .send({ title: 'Updated Title' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Updated Title');
  });

  it('should delete book by id', async () => {
    const res = await request(app)
      .delete(`/api/books/${(global as any).bookId}`)
      .set('Authorization', `Bearer ${(global as any).token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Book deleted');
  });
});
