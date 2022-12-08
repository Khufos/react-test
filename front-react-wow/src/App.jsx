import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Sidebar2 from "./components/sidebar/Sidebar2";


function App() {
  return (
    <div className="App">
      <NavBar/>
    
      
  
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
