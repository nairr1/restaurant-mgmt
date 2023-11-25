import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCjd6--tkNxlYsJfzyNuW1i7bWQoL4-zac",
  authDomain: "restaurant-app-cc79c.firebaseapp.com",
  databaseURL: "https://restaurant-app-cc79c-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-cc79c",
  storageBucket: "restaurant-app-cc79c.appspot.com",
  messagingSenderId: "1029494837077",
  appId: "1:1029494837077:web:c4a63666b028850e62e9dc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };