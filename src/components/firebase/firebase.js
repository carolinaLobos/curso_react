// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAH-Y_I4XEpjpInB5DVyQ510pt6AqvksiQ",

  authDomain: "app-curso-react.firebaseapp.com",

  projectId: "app-curso-react",

  storageBucket: "app-curso-react.appspot.com",

  messagingSenderId: "1015989707021",

  appId: "1:1015989707021:web:be7949aa9f4bc759ebd044"

};


// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db=fb.firestore();