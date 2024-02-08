import { getEnvVariable } from '@/helpers/getEnvVariable';
import mongoose from 'mongoose';

export const connectMongoDbAtlas = async () => {
  try {
    const mongoDBURI = getEnvVariable(process.env.NEXT_PUBLIC_MONGODB_ATLAS_URI);
    mongoose.connect(mongoDBURI, { dbName: 'PersonalWebsite' });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.log(`Unable to connect MongoDB Atlas ${error}`);
  }
};
