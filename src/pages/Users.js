// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { ref, child, get } from "firebase/database";
// import { Link } from "react-router-dom";

import PetOwnerStore from "../PetOwnerStore";
import PetList from "./components/PetList";
import OwnerList from "./components/OwnerList";
import "../App.css";

function Users() {
  const store = new PetOwnerStore();
  return (
    <div className="Users">
      <h3>Pets List</h3>
      <PetList store={store} />
      <hr />
      <h3>Owners List</h3>
      <OwnerList store={store} />
    </div>
  );
}

export default Users;

// function Users() {
//   const [users, setUsers] = useState({});
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     getUsers();
//   }, []);

//   async function getUsers() {
//     const dbRef = ref(db);
//     await get(child(dbRef, `users`))
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           setUsers(snapshot.val());
//           setLoading(false);
//         } else {
//           console.log("No data available");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   if (loading) {
//     return;
//   }
//   return (
//     <div>
//       <div>
//         {console.log(users)}
//         <UserList users={users} />
//       </div>
//       <Link style={{ display: "block", marginTop: 12 }} to="/">
//         Home
//       </Link>
//       <Link style={{ display: "block" }} to="/profile">
//         Profile
//       </Link>
//     </div>
//   );
// }

// const UserList = ({ users }) => (
//   <div>
//     <h2>List of users</h2>
//     {Object.keys(users).map((key) => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );
// export default Users;
