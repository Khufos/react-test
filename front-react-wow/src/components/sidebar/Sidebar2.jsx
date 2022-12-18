import React from 'react'
import { NavLink } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import Submenu from './Submenu';

const Sidebar2 = () => {
   
  return (
   <section>
      <div className="">
         {SidebarData.map((item,index)=>{
            return<Submenu item={item} key={index} />;
         })}
      </div>
   </section>
  )
}

export default Sidebar2