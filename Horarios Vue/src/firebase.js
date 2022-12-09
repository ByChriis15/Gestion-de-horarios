import firebase from 'firebase/app';
import  'firebase/firestore';


const firebaseConfig ={
    apiKey: "AIzaSyCUQM4R1q1wWIzmn_IefO30HNrmFGnJ_z0",
    authDomain: "final-7c741.firebaseapp.com",
    projectId: "final-7c741",
    storageBucket: "final-7c741.appspot.com",
    messagingSenderId: "488638891131",
    appId: "1:488638891131:web:5149608864790b51ff4ede"
  };


  // Iniciamos Firebase
const app = initializeApp(firebaseConfig);
// Importamos 
export const db = firebase.firestore();