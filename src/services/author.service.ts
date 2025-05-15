import { IAuthor } from '../models/author.model';
import * as authorRepository from '../repositories/author.repository';

export const createAuthor = async (data: Partial<IAuthor>): Promise<IAuthor> => {
  return await authorRepository.createAuthor(data);
};

export const getAuthors = async (): Promise<IAuthor[]> => {
  return await authorRepository.getAuthors();
};

export const getAuthorById = async (id: string): Promise<IAuthor | null> => {
  return await authorRepository.getAuthorById(id);
};

export const updateAuthor = async (
  id: string,
  data: Partial<IAuthor>
): Promise<IAuthor | null> => {
  return await authorRepository.updateAuthor(id, data);
};

export const deleteAuthor = async (id: string): Promise<IAuthor | null> => {
  return await authorRepository.deleteAuthor(id);
};
