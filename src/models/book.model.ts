import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  description: string;
  author: mongoose.Types.ObjectId;
  publishedYear: number;
}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    publishedYear: { type: Number },
  },
  { timestamps: true }
);

export default mongoose.model<IBook>('Book', BookSchema);
