import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navigation/Navbar";
import { Button } from "./components/ui/button";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
