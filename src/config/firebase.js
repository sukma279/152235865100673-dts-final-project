import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyBRp61F4qdMzThcIwUbwWY2bvFQBYBuQYY",
  authDomain: "movie-list-d21c5.firebaseapp.com",
  projectId: "movie-list-d21c5",
  storageBucket: "movie-list-d21c5.appspot.com",
  messagingSenderId: "818831655856",
  appId: "1:818831655856:web:0bf556188c1b7a7f620c75"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
