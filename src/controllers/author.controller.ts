import { Request, Response } from 'express';
import Author from '../models/author.model';

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getAuthors = async (_: Request, res: Response) => {
  const authors = await Author.find();
  res.json(authors);
};
