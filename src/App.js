import "./App.css";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import SetUser from "./pages/SetUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import SearchResults from "./pages/SearchResults";
import ScriptDisplay from "./pages/ScriptDisplay";


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setuser" element={<SetUser />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/searchresults" element={<SearchResults />} />
      <Route path="/scriptDisplay" element={<ScriptDisplay />} />
    </Routes>
  </BrowserRouter>
);

export default App;
