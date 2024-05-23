import mongoose, { Document, Schema } from "mongoose";
import customAutoIncrementId from "../middleware/customAutoIncrementId";

export interface IBook extends Document {
    name: string;
    author: string;
    publicationDate: string;
    description: string;
    price: number;
    genres: { title: string }[];
}

const BookSchema = new Schema<IBook>({
    name: {
      type : String,
    }, 
    author: {
      type : String,
    }, 
    publicationDate:{
      type: String,
    },
    description:{
      type: String,
    },
    price: {
      type: Number,
    },
    genres: [{ title: String }],
    
  });

BookSchema.pre("save", customAutoIncrementId("id", 10000, "B-"));

const BookModel  = mongoose.model<IBook>("Book", BookSchema);

export default BookModel;