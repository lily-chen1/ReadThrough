import "./resources/Home.css";
import { Link } from "react-router-dom";
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
    </div>
  );
}

export default Home;
