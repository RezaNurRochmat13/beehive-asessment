import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
  bio?: string;
}

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  bio: { type: String },
}, { timestamps: true });

export default mongoose.model<IAuthor>('Author', AuthorSchema);
