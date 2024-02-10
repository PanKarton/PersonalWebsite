// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getEnvVariable } from '@/helpers/getEnvVariable';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: getEnvVariable(process.env.NEXT_PUBLIC_API_KEY),
  authDomain: getEnvVariable(process.env.NEXT_PUBLIC_AUTH_DOMAIN),
  projectId: getEnvVariable(process.env.NEXT_PUBLIC_PROJECT_ID),
  storageBucket: getEnvVariable(process.env.NEXT_PUBLIC_STORAGE_BUCKET),
  messagingSenderId: getEnvVariable(process.env.NEXT_PUBLIC_MESSAGING_SENDER_IDD),
  appId: getEnvVariable(process.env.NEXT_PUBLIC_APP_ID),
  measurementId: getEnvVariable(process.env.NEXT_PUBLIC_MEASUREMENT_ID),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
