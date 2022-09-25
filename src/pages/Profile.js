import './resources/Profile.css';
import profilePic from './resources/profilePic.jpg';

import { getDatabase, ref, set, onValue, child, push, update } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { observable, action, makeObservable } from 'mobx';

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

function Profile() {
  const profileData = {};
  const editing = false;

  const handleClick = () => {
    
  }

  return (
    <body>
        <div class="content">
            <header>
                <h1>Profile</h1>
            </header>
            <figure>
                <img src={profilePic}></img>
            </figure>
            <h2>Name:</h2>
            <p>Person1</p>
            <h2>Position:</h2>
            <p>Writer</p>
            <h2>Bio:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <button type="button" onclick="handleClick()">Edit Profile</button>
        </div>
    </body>
  );
}



export default Profile;
