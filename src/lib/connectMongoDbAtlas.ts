import mongoose from 'mongoose';
import { getEnvVariable } from '../helpers/getEnvVariable';

export const connectMongoDbAtlas = async () => {
  try {
    const mongoDBURI = getEnvVariable(process.env.MONGODB_ATLAS_URI);
    mongoose.connect(mongoDBURI);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log(`Unable to connect MongoDB Atlas ${error}`);
  }
};
