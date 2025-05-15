import Author, { IAuthor } from '../models/author.model';

export const createAuthor = async (data: Partial<IAuthor>): Promise<IAuthor> => {
  const author = new Author(data);
  return await author.save();
};

export const getAuthors = async (): Promise<IAuthor[]> => {
  return await Author.find();
};

export const getAuthorById = async (id: string): Promise<IAuthor | null> => {
  return await Author.findById(id);
};

export const updateAuthor = async (
  id: string,
  data: Partial<IAuthor>
): Promise<IAuthor | null> => {
  return await Author.findByIdAndUpdate(id, data, { new: true });
};

export const deleteAuthor = async (id: string): Promise<IAuthor | null> => {
  return await Author.findByIdAndDelete(id);
};
