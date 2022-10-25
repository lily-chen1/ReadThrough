import "./resources/Home.css";
import { Link } from "react-router-dom"; 
import NavBar from "./NavBar";
import './resources/NavBar.css';


function Home() {
  return (
    <div>
      <NavBar />
    </div>

    // <div>
    //   <h2>ReadThrough</h2>
    //   <Link style={{ display: "block" }} to="/setuser">
    //     Set user
    //   </Link>
    //   <Link style={{ display: "block" }} to="/users">
    //     Users
    //   </Link>
    //   <Link style={{ display: "block" }} to="/profile">
    //     Profile
    //   </Link>
    //   <Link style={{ display: "block" }} to="/SearchResults">
    //     Search
    //   </Link>
    // </div>
  );
}

export default Home;
