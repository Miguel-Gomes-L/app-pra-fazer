import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3As9u0-IG325KcW2l-SIs98pHLdynPhU",
  authDomain: "projetos-2026-1-miguel.firebaseapp.com",
  projectId: "projetos-2026-1-miguel",
  storageBucket: "projetos-2026-1-miguel.firebasestorage.app",
  messagingSenderId: "602372784644",
  appId: "1:602372784644:web:28cd0681dfaa901af7eb51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{ auth }