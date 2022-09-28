import { db } from "./firebase";
import { ref, set } from "firebase/database";

export const createUser = (username, email, password) =>
  set(ref(db, "users/" + username), {
    username: username,
    email: email,
    password: password,
  });
