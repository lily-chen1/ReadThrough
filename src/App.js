import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SetUser from "./pages/SetUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setuser" element={<SetUser />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
