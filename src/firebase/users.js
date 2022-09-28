import { db } from "./firebase";
import { ref, set } from "firebase/database";

export const createUser = (username, email, password) =>
  set(ref(db, "users/" + username), {
    id: new Date().getTime().toString(),
    username: username,
    email: email,
    password: password,
  });

export const getUser = (id) => db.ref("users").once("value");
