import React, { useState, useEffect } from "react";
import "./resources/Profile.css";
import { db } from "../firebase";
import { ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";
import { action, autorun, makeObservable, observable } from "mobx";


class ProfileInfo {
  username = null
  profilePic = null
  position = null
  bio = null
  user = null
  loading = true

  constructor() {
    makeObservable(this, {
      username: observable,
      profilePic: observable,
      position: observable,
      bio: observable,
      setUsername: action,
      setProfilePic: action,
      setPosition: action,
      setBio: action,
      setUserInfo: action,
      editProfile: action
    })
  }
  
  setUserInfo(info) {
    console.log("setting user")
    this.username = info.username
    this.profilePic = info.profilePic
    this.position = info.position
    this.bio = info.bio
    this.user = info
  }

  // setters
  setUsername(newName) {
    this.username = newName
    // maybe reload page or re render the username somehow
    // update the database as well 
  }
  setProfilePic(newPic) {
    this.profilePic = newPic
  }
  setPosition(newPosition) {
    this.position = newPosition
  }
  setBio(newBio) {
    this.bio = newBio
  }
  editProfile() { // what happens when "Edit Profile" button is clicked, so far only changes username to BEEEP, but hopefully will switch to edit mode
    console.log("editing...")
    this.username = "BEEEEEEP"
    // when the username is changed, MobX should also alert that the username was changed in the console
  }
}

const profile = new ProfileInfo()

autorun(() => {
  console.log("Username: ", profile.username)
})

function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const dbRef = ref(db);
    await get(child(dbRef, `users/Lily`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser(snapshot.val());
          profile.setUserInfo(snapshot.val());
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
        <img src={profile.profilePic} alt="Profile pic" />
      </figure>
      <h2>Username: </h2>
      <p>{profile.username}</p>
      <h2>Position:</h2>
      <p>{profile.position}</p>
      <h2>Bio:</h2>
      <p>{profile.bio}</p>
      <button type="button" onClick={() => profile.editProfile()}>Edit Profile</button>
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
