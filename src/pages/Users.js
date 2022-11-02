import React, { useState, useEffect } from "react";
import { db } from "../firebase";
// import { ref, child, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    //const dbRef = ref(db);
    await getDocs(collection(db, "users"))
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          const doc_array = [];
          snapshot.docs.forEach(doc => {
              // doc is a DocumentSnapshot with actual data
              doc_array.push(doc.data());
          })
          setUsers(doc_array);
          setLoading(false);
        }  
        else {
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
    <div>
      <div>
        {console.log(users)}
        <UserList users={users} />
      </div>
      <Link style={{ display: "block", marginTop: 12 }} to="/">
        Home
      </Link>
      <Link style={{ display: "block" }} to="/profile">
        Profile
      </Link>
    </div>
  );
}

const UserList = ({ users }) => (
  <div>
    <h2>List of users</h2>
    {Object.keys(users).map((key) => (
      <div key={key}>{users[key].username}</div>
    ))}
  </div>
);
export default Users;
