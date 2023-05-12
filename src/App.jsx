import "./App.css";
import Navbar from "./components/Navbar";
import { UserList } from "./components/UserList";
// import data from "./data/data";

function App() {
  return (
    <div>
      <Navbar />
      <UserList />
      {/* <p className="text-6xl">{data[0].id}</p> */}
    </div>
  );
}

export default App;
