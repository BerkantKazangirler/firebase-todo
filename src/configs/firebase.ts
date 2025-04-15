import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const FIRE_BASE_CONFIG = {
  apiKey: import.meta.env.VITE_FIREBASEAPI,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGESENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

const app = initializeApp(FIRE_BASE_CONFIG);
export const db = getFirestore(app);
