import "./resources/Home.css";
import { Link } from "react-router-dom";
import "./resources/NavBar.css";

function Home() {
  return (
    <div>
      <h2>ReadThrough</h2>
      <Link style={{ display: "block" }} to="/setuser">
        Set user
      </Link>
      <Link style={{ display: "block" }} to="/users">
        Users
      </Link>
      <Link style={{ display: "block" }} to="/profile">
        Profile
      </Link>
      <Link style={{ display: "block" }} to="/SearchResults">
        Search
      </Link>
      <Link style={{ display: "block" }} to="/ScriptDisplay">
        Script Display
      </Link>
      <Link style={{ display: "block" }} to="/typesensetest">
        Typesense Test
      <Link style={{ display: "block" }} to="/ScriptFunctions">
        Script Review
      </Link>
    </div>
  );
}

export default Home;
