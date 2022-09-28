import React, { useState } from "react";
import "./resources/Login.css";
import { createUser } from "../firebase/users";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  const handleSubmit = () => {
    createUser(username, email, password);
    let path = `/profile`;
    navigate(path);
  };

  return (
    <body>
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
          <label>
            Email:
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="Email"
            />
          </label>
          <label>
            Password:
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              name="Password"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </body>
  );
}

export default Login;
