import "./resources/Home.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {

  const [searchName, setSearchName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${searchName}`)
    // this.props.history.push('UserProfile/'+searchName);
    let userURL = "/userprofile/" + searchName
    navigate(userURL)
  }

  return (
    <div>
      <h2>ReadThrough</h2>
      <Link style={{ display: "block" }} to="/users">
        Users
      </Link>
      <Link style={{ display: "block" }} to="/profile">
        Profile
      </Link>
      <Link style={{ display: "block" }} to="/userprofile">
        User Profile
      </Link>
      {/* search bar */}
      <form onSubmit={handleSubmit}>
        <label>Enter name of user:
          <input
            type="text" 
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}

export default Home;
