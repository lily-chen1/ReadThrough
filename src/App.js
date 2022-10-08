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

// import PetOwnerStore from "./PetOwnerStore";
// import PetList from "./components/PetList";

// function App() {
//   const store = new PetOwnerStore();
//   return (
//     <div className="App">
//       <PetList store={store} />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Provider, observer } from "mobx-react";
// //import { Store } from "./store";
// import PetOwnerStore from "./PetOwnerStore";

// const store = new PetOwnerStore();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <h1>
//         123
//       </h1>
//     </Provider>
//   );
// };

// export default App;