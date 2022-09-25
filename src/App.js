import logo from './logo.svg';
import './App.css';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
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
  measurementId: "G-NS8XGRKMEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData("afsjfj", "fsafan", "fsafasn", "fasfn")

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
