import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuLH706Rtg8BnPY4E5RyitNfRe87dLxWE",
  authDomain: "portfolio-92e39.firebaseapp.com",
  projectId: "portfolio-92e39",
  storageBucket: "portfolio-92e39.firebasestorage.app",
  messagingSenderId: "951090558356",
  appId: "1:951090558356:web:5f16f723a1aa0510fa8b81",
  measurementId: "G-73N1MZ5QRG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
