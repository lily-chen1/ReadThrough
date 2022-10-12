import React, { useState, useEffect } from "react";
import "./resources/Profile.css";
import { db } from "../firebase";
import { ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const dbRef = ref(db);
    await get(child(dbRef, `users/Lily`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser(snapshot.val());
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (loading) {
    return;
  }
  return (
    <div className="content">
      <header>
        <h1>Profile</h1>
      </header>
      <figure>
        <img src={user.profilePic} alt="Profile pic" />
      </figure>
      <h2>Username: </h2>
      <p>{user.username}</p>
      <h2>Position:</h2>
      <p>{user.position}</p>
      <h2>Bio:</h2>
      <p>{user.bio}</p>
      <button type="button">Edit Profile</button>
      <Link style={{ display: "block", marginTop: 12 }} to="/">
        Home
      </Link>
      <Link style={{ display: "block" }} to="/users">
        Users
      </Link>
    </div>
  );
}

export default Profile;
