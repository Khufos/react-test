import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import Sidebar from "./components/sidebar/Sidebar";
import Sidebar2 from "./components/sidebar/Sidebar2";
import Sidebar3 from "./components/sidebar/Sidebar3";
import Dashboard from "./components/dashboard/Dashboard";
const Div = styled.div`
  position: relative;
`;

function App() {
  return (
    <Div>
      <Sidebar3/>
      <Dashboard />
    </Div>

    
  
  
  );
}

export default App;
