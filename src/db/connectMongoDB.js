import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  }
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}
