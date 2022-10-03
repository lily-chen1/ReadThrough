import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
