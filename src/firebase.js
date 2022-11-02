import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  // OLD DB
  // apiKey: "AIzaSyBsvX3cEiyWsutpBgDM4TpF7bMyX10dvzU",
  // authDomain: "capstone-test-dd957.firebaseapp.com",
  // databaseURL: "https://capstone-test-dd957-default-rtdb.firebaseio.com",
  // projectId: "capstone-test-dd957",
  // storageBucket: "capstone-test-dd957.appspot.com",
  // messagingSenderId: "386690672581",
  // appId: "1:386690672581:web:ae51af75dfad432ac0cdac",
  // measurementId: "G-NS8XGRKMEE",
  // NEW DB WITH CLOUD FUNCTIONS AND BLAZE PLAN
  apiKey: "AIzaSyAhZunTEpuLdYrRdVXfLM_xSpFaeN7HZ2E",
  authDomain: "readthrough-network.firebaseapp.com",
  projectId: "readthrough-network",
  storageBucket: "readthrough-network.appspot.com",
  messagingSenderId: "91949141674",
  appId: "1:91949141674:web:c0b1d58b23260eaa634ad3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getFirestore(app);
export { db };
