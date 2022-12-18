import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { RiDatabaseFill } from 'react-icons/ri';


export const SidebarData = [
    {
      title: "Classe",
      path:"#",
      icon: <RiDatabaseFill/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      submenu:true,
      subNav: [
        {
          title: "Death Knigth Guides",
          path: "/classes/Death Knight",
          icon: <img src={"/icones/dk.jpg" } alt="dk" width="12px" height="12px"/> ,
        },
        {
          title: "Druida Guides",
          path: "/classes/Druid",
          icon: <img src={"/icones/druid.png" } alt="druid" width="12px" height="12px"/>,
        },
        {
          title: "Hunter Guides",
          path: "/classes",
          icon: <img src={"/icones/hunter.png" } alt="hunter" width="12px" height="12px"/>,
        },
        {
          title: "Mage Guides",
          path: "/classes",
          icon: <img src={"/icones/mage.png" } alt="mage" width="12px" height="12px"/>,
        },
        {
          title: "Paladino Guides",
          path: "/classes",
          icon: <img src={"/icones/paladin.png" } alt="Paladino" width="12px" height="12px"/>,
        },
        {
          title: "Priest Guides",
          path: "/classes",
          icon: <img src={"/icones/priest.png" } alt="Priest" width="12px" height="12px"/>,
        },
        {
          title: "Rogue Guides",
          path: "/classes",
          icon: <img src={"/icones/rogue.png" } alt="Rogue" width="12px" height="12px"/>,
        },
        {
          title: "Shaman Guides",
          path: "/classes",
          icon: <img src={"/icones/shaman.png" } alt="Shaman" width="12px" height="12px"/>,
        },
        {
          title: "Warlock Guides",
          path: "/classes",
          icon: <img src={"/icones/warlock.png" } alt="Warlock" width="12px" height="12px"/>,
        },
        {
          title: "Warrior Guides",
          path: "/classes",
          icon: <img src={"/icones/warrior.png" } alt="Warrior" width="12px" height="12px"/>,
        },
      ],
    },
    {
      title: "Profissions",
      path: "#",
      icon: <RiDatabaseFill/>,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
      submenu:true,
      subNav: [
        {
          title: "reports",
          path: "/classes",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "reports 2",
          path: "/classes",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "reports 3",
          path: "/classes",
          icon: <IoIcons.IoIosPaper />,
        },
      ],
    },
    {
      title: "Addons",
      path: "#",
      icon: <RiDatabaseFill/>,
    },
    {
      title: "Team",
      path: "/team",
      icon: <RiDatabaseFill/>,
    },
    {
      title: "Messages",
      path: "/messages",
      icon: <RiDatabaseFill/>,
      submenu:true,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
  
      subNav: [
        {
          title: "Message 1",
          path: "/messages/message1",
          icon: <IoIcons.IoIosPaper />,
        },
        {
          title: "Message 2",
          path: "/messages/message2",
          icon: <IoIcons.IoIosPaper />,
        },
      ],
    },
    {
      title: "Support",
      path: "/support",

      icon: <IoIcons.IoMdHelpCircle />,
    },
  ];
  