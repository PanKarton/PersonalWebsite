import { initializeApp } from 'firebase/app';
import { getEnvVariable } from '@/helpers/getEnvVariable';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: getEnvVariable(process.env.NEXT_PUBLIC_API_KEY),
  authDomain: getEnvVariable(process.env.NEXT_PUBLIC_AUTH_DOMAIN),
  projectId: getEnvVariable(process.env.NEXT_PUBLIC_PROJECT_ID),
  storageBucket: getEnvVariable(process.env.NEXT_PUBLIC_STORAGE_BUCKET),
  messagingSenderId: getEnvVariable(process.env.NEXT_PUBLIC_MESSAGING_SENDER_IDD),
  appId: getEnvVariable(process.env.NEXT_PUBLIC_APP_ID),
  measurementId: getEnvVariable(process.env.NEXT_PUBLIC_MEASUREMENT_ID),
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
