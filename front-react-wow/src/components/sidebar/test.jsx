const [currentMenu, setCurrentMenu] = useState("");

{
  menu.submenu && (
    <BsChevronDown className=""
      onClick={() => {
        setCurrentMenu(menu.title);
        setSubmenuOpen(!submenuOpen);
      }}
    />
  );
}



{
  menu.submenu && submenuOpen && currentMenu === menu.title && open && (
    <ul>
      {menu.submenuItems.map((menu, index) => {
        return (
          <li
            key={index}
            className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md"
          >
            {menu.title}
          </li>
        );
      })}
    </ul>
  );
}