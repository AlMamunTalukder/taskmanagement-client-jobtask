// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyD_l0MGbhvcVPW5RS97nrBjfMidNgdH4S4",
  //   authDomain: "task-management-e8013.firebaseapp.com",
  //   projectId: "task-management-e8013",
  //   storageBucket: "task-management-e8013.appspot.com",
  //   messagingSenderId: "136113949126",
  //   appId: "1:136113949126:web:e03f28dac3b25c8bce8ac7",

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
