import React, { useState, useEffect } from "react";
import "./resources/Profile.css";
import { db } from "../firebase";
import { ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";
import { inject, observer } from "mobx-react";

function SetUser(props) {
  const { userStore } = props;
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  async function getUser() {
    const dbRef = ref(db);
    await get(child(dbRef, `users/${username}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          userStore.setUser(snapshot.val());
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleSubmit = () => {
    setLoading(true);
    getUser();
  };

  if (loading) {
    return;
  }
  return (
    <div>
      Current user in the MobX store:{" "}
      {userStore.username !== null ? userStore.username : "none"}
      <form style={{ display: "block", marginTop: 12 }} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link style={{ display: "block", marginTop: 12 }} to="/">
        Home
      </Link>
      <Link style={{ display: "block" }} to="/users">
        Users
      </Link>
    </div>
  );
}

export default inject("userStore")(SetUser);
