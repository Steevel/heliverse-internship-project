import "./App.css";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import { UserList } from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import data from "./data/data";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<UserList />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
