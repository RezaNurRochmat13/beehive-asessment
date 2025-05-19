import Book, { IBook } from '../models/book.model';

export const createBook = async (data: Partial<IBook>): Promise<IBook> => {
  const book = new Book(data);
  return await book.save();
};

export const getBooksPaginated = async (
  page: number,
  limit: number
): Promise<{ data: IBook[]; total: number }> => {
  const skip = (page - 1) * limit;

  const [data, total] = await Promise.all([
    Book.find()
      .populate('author')
      .skip(skip)
      .limit(limit),
    Book.countDocuments(),
  ]);

  return { data, total };
};

export const getBookById = async (id: string): Promise<IBook | null> => {
  return await Book.findById(id).populate('author');
};

export const updateBook = async (id: string, data: Partial<IBook>): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBook = async (id: string): Promise<IBook | null> => {
  return await Book.findByIdAndDelete(id);
};

export const borrowBook = async (id: string): Promise<IBook | null> => {
  return await Book.findByIdAndUpdate(id, { isBorrowed: true }, { new: true });
}
