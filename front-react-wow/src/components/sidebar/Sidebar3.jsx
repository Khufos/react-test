import React from 'react';
import { useState } from 'react';
import {  BsSearch } from "react-icons/bs";
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';

const Sidebar3 = ()=> {
  const [open,setOpen] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState(false);
  return (
    <section className='flex flex-col left-0 bg-black w-72 gap-2 fixed h-screen p-5 pt-8 border-r-2 border-gray-500'>
      <div className='inline-flex' >
        <Link to={'/'} className='text-4xl rounded cursor-pointer block float-left mr-3'>
        <img src={"/logo/logo_wow.png"}  />
        </Link>
        
      </div>
      <div className="flex menus-center rounded-md bg-light-white mt-6 px-4 py-2">
        <BsSearch className="text-white text-lg block float-left cursor-pointer mr-2 " />
        <input type={"search"} placeholder="Search" className="text-base bg-transparent w-full text-white 
      focus:outline-none"/>

      </div>
      
      <ul className="overflow-x-hidden w-64 ">
         {SidebarData.map((item,index)=>{
            return<Submenu item={item} key={index}/>;
         })}
      </ul>

    
    </section>
  )
}

export default Sidebar3