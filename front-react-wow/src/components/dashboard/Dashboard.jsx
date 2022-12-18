import React, { useEffect } from "react";
import styled from "styled-components";
//import Analytics from "./Analytics";
//import Earnings from "./Earnings";
//import FAQ from "./FAQ";
import NavBar from "../navbar/NavBar";
//import Profile from "./Profile";
//import Transfers from "./Transfers";
//import scrollreveal from "scrollreveal";
import { Outlet } from "react-router-dom";
export default function Dashboard() {
  
  return (
    <Section >      
      <NavBar/>
      <Outlet/>     
    </Section>
  );
}

const Section = styled.section`
  margin-left: 19vw;
  height: 100%;
`;