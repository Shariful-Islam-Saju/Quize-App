// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const app = initializeApp({
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MASSAGINGSENDERID,
//   appId: import.meta.env.VITE_ID,
// });

const app = initializeApp({
  apiKey: "AIzaSyCKQFIR2X5LkVbPaTHycTXqDGo1i8BTJE0",
  authDomain: "react-quize-app-303d2.firebaseapp.com",
  databaseURL:
    "https://react-quize-app-303d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quize-app-303d2",
  storageBucket: "react-quize-app-303d2.appspot.com",
  messagingSenderId: "831037217082",
  appId: "1:831037217082:web:a4a94938931738033f5803",
});

// Initialize Firebase

export default app;
