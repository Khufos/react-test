import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import Submenu from './Submenu';
import { SidebarData } from './SidebarData';



const Sidebar = (  ) => {
const [sidebar, setSidebar] = useState(false);
const showSidebar = () => setSidebar(!sidebar);
  return (
    <>


  <div className="SidebarNav">
    <div className="SidebaWrap">
      {SidebarData.map((item,index)=>{
        return<Submenu item={item} key={index} />;
      })}

      </div>
 

  </div>
    </>
  )
}

export default Sidebar