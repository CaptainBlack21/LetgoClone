import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDy92ObP4KJaFdlBfTX7luoABAx1Ix7g3c",
  authDomain: "letgoclone-54e22.firebaseapp.com",
  projectId: "letgoclone-54e22",
  storageBucket: "letgoclone-54e22.appspot.com", // storageBucket uzantısını düzelttim
  messagingSenderId: "708270986237",
  appId: "1:708270986237:web:e8f40d0d84fb4daa97ff94",
  measurementId: "G-QDS9ZTRQZZ"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Firestore ve Auth yapılandırmaları
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };
