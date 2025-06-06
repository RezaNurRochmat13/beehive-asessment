import { Request, Response } from 'express';
import * as bookService from '../services/book.service';

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  try {
    const result = await bookService.getBooks(page, limit);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const book = await bookService.getBookById(req.params.id);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await bookService.updateBook(req.params.id, req.body);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
};

export const deleteBook = async (req: Request, res: Response) => {
  const book = await bookService.deleteBook(req.params.id);
  if (book) res.json({ message: 'Book deleted' });
  else res.status(404).json({ message: 'Book not found' });
};

export const borrowedBook = async (req: Request, res: Response) => {
  const book = await bookService.getBookById(req.params.id);

  if (book?.isBorrowed == true) res.status(400).json({ message: 'Book already borrowed' });

  if (!book) res.status(404).json({ message: 'Book not found' });

  await bookService.borrowedBook(req.params.id);

  res.json({ message: 'Book borrowed' });
}
