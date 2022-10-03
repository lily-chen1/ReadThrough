import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBsvX3cEiyWsutpBgDM4TpF7bMyX10dvzU",
  authDomain: "capstone-test-dd957.firebaseapp.com",
  databaseURL: "https://capstone-test-dd957-default-rtdb.firebaseio.com",
  projectId: "capstone-test-dd957",
  storageBucket: "capstone-test-dd957.appspot.com",
  messagingSenderId: "386690672581",
  appId: "1:386690672581:web:ae51af75dfad432ac0cdac",
  measurementId: "G-NS8XGRKMEE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
