import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';
import { getStorage, connectStorageEmulator, FirebaseStorage } from 'firebase/storage';
import { getFirestore, connectFirestoreEmulator, Firestore } from 'firebase/firestore';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';
import type { FirebaseConfig, FirebaseServices } from '@/types/firebase';

const firebaseConfig: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let auth: Auth;
let storage: FirebaseStorage;
let db: Firestore;
let analytics: Analytics | undefined;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
  db = getFirestore(app);
  
  // Initialize analytics only if supported
  isSupported().then(supported => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  }).catch(console.error);

  // Enable emulators in development
  if (import.meta.env.DEV) {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectStorageEmulator(storage, 'localhost', 9199);
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

const services: FirebaseServices = {
  app,
  auth,
  storage,
  db,
  analytics
};

export { services as default, app, auth, storage, db, analytics };
