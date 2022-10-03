import React, { useState, useEffect } from "react";
import "./resources/Profile.css";
import profilePic from "./resources/profilePic.jpg";
import { getUsers } from "../firebase/users";

function Profile() {
  useEffect(() => {
    console.log(getUsers());
  });
  return (
    <div class="content">
      <header>
        <h1>Profile</h1>
      </header>
      <figure>
        <img src={profilePic} alt="Profile pic" />
      </figure>
      <h2>Name:</h2>
      <p>Person1</p>
      <h2>Position:</h2>
      <p>Writer</p>
      <h2>Bio:</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <button type="button">Edit Profile</button>
    </div>
  );
}

export default Profile;
