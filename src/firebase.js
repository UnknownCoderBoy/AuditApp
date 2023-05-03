import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBibT4msOjYXw4VxwFYDrgkBLqCsQMvq9A",
  authDomain: "auditapp-e9294.firebaseapp.com",
  projectId: "auditapp-e9294",
  storageBucket: "auditapp-e9294.appspot.com",
  messagingSenderId: "68019361481",
  appId: "1:68019361481:web:f1f4f25a0607149205df18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;
