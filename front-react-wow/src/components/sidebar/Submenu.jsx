import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Submenu = ({item}) => {
const [subnav, setSubnav] = useState(false);
const showSubnav = () => setSubnav(!subnav);
  return (
    <section>
    <li to={item.path} onClick={item.subNav && showSubnav}  className="text-gray-300 text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-light-white rounded-md mt-2 ">
        {item.icon}
        <span className='text-base font-medium flex-1'>{item.title}</span>
        <div className='text-2xl block float-left'>
        {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null }
        </div>
    </li>
        {subnav && item.subNav.map((item,index) =>{
                return(
                    <Link to={item.path} key={index} className="text-gray-300 text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-light-white rounded-md mt-2 ">
                        {item.icon}
                        <span className='text-base font-medium flex-1'>{item.title}</span>
                    </Link>
                )
            })}
    
    </section>
  )
}

export default Submenu