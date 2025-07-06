import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ7E3wJIIhP585H6cwxBD3qvW3jA2yVJY",
  authDomain: "taskmanger-f9822.firebaseapp.com",
  projectId: "taskmanger-f9822",
  storageBucket: "taskmanger-f9822.firebasestorage.app",
  messagingSenderId: "446525507603",
  appId: "1:446525507603:web:80638d4685ae18559417e6",
  measurementId: "G-9XCJ3PRLW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export Google Sign-in function
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export { auth };
