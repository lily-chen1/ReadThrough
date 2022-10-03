import "./resources/Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <body>
      <div>ReadThrough</div>
      <Link to="/profile">Profile</Link>
    </body>
  );
}

export default Home;
