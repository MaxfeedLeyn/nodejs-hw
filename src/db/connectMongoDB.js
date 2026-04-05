import mongoose from "mongoose";
import { Note } from "../models/note.js";

export const connectMongoDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    await mongoose.connect(mongoURL);
    console.log('Connected to MongoDB');

    await Note.createIndexes();
    console.log('Indexes created for Note model');
  }
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
