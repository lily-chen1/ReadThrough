import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export async function getUsers() {
  const citiesCol = collection(db, "users");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  console.log(cityList);
  return cityList;
}
