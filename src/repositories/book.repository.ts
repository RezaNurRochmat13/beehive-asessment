import Book, { IBook } from '../models/book.model';

export const createBook = async (data: Partial<IBook>): Promise<IBook> => {
  const book = new Book(data);
  return await book.save();
};

export const getBooks = async (): Promise<IBook[]> => {
  return await Book.find();
};

export const getBookById = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id);
};

export const updateBook = async (id: string, data: Partial<IBook>): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string): Promise<IBook | null> => {
  return await Book.findByIdAndDelete(id);
};
