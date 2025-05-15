import { IBook } from '../models/book.model';
import * as bookRepository from '../repositories/book.repository';

export const createBook = async (data: Partial<IBook>): Promise<IBook> => {
  return await bookRepository.createBook(data);
};

export const getBooks = async (): Promise<IBook[]> => {
  return await bookRepository.getBooks();
};

export const getBookById = async (id: string): Promise<IBook | null> => {
  return await bookRepository.getBookById(id);
};

export const updateBook = async (id: string, data: Partial<IBook>): Promise<IBook | null> => {
  return await bookRepository.updateBook(id, data);
};

export const deleteBook = async (id: string): Promise<IBook | null> => {
  return await bookRepository.deleteBook(id);
};
