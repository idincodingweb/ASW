import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Impor Firestore

const firebaseConfig = {
  apiKey: "AIzaSyD-6nYMbYArwRbmjGqrGaWeQlDC3Fex7ps",
  authDomain: "story-web-idincuy.firebaseapp.com",
  projectId: "story-web-idincuy",
  storageBucket: "story-web-idincuy.appspot.com",
  messagingSenderId: "418696825863",
  appId: "1:418696825863:web:3b4611d4e515f5b6f0aea2",
  measurementId: "G-Y7YNWQVVS8"
};

// Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Auth dan Firestore
const auth = getAuth(app);
const db = getFirestore(app); // Inisialisasi Firestore

export { auth, db }; // Ekspor db dan auth