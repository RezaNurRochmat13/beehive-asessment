import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  publishedYear: number;
}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String },
    publishedYear: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>('Book', BookSchema);
