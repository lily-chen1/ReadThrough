import React, { useState, useEffect } from "react";
import "./resources/Profile.css";
import { db } from "../firebase";
import { ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SetUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
    getUser();
  }, []);

  async function getUsers() {
    const dbRef = ref(db);
    await get(child(dbRef, `users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUsers(snapshot.val());
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

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

  let navigate = useNavigate();
  const handleSubmit = () => {
    let path = `/`;
    navigate(path);
  };

  if (loading) {
    return;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="Username"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SetUser;
