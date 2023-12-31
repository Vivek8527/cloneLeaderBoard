/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import "./sidebar.css";
import { BiNotepad } from "react-icons/bi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState(null);

  const toggle = () => setIsOpen(!isOpen);
  const toggleSubMenu = (index) =>
    setActiveItem(activeItem === index ? null : index);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
    },

    {
      // path: "/allHost",
      name: "All Host",
      icon: <CgProfile />,
      subMenu: [
        {
          path: "/Hostaccepted",
          name: "Hostaccepted",
          icon: "",
        },
        {
          path: "/Hostrejected",
          name: "Hostrejected",
          icon: "",
        },
        {
          path: "/Hostrequest",
          name: "Hostrequest",
          icon: "",
        },
      ],
    },

    {
      path: "/report",
      name: "Report",
      icon: <BiNotepad />,
    },
  ];

  return (
    <>
      <div className="container">
        <div style={{ width: isOpen ? "220px" : "60px" }} className="sidebar">
          <div className="top_section">
            <h1></h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <FaBars onClick={toggle} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <div className="sidebars_icons_dashboard" key={index}>
              <div style={{ display: "flex" }}>
                <span className="icon">{item.icon}</span>
                <NavLink
                  to={item.path}
                  onClick={() => toggleSubMenu(index)}
                  className="link"
                  activeClassName="active"
                >
                  <div
                    style={{ width: isOpen ? "block" : "none" }}
                    className="link-text"
                  >
                    {item.name}
                  </div>
                </NavLink>
              </div>
              {item.subMenu && index === activeItem && (
                <>
                  {item.subMenu.map((subItem, subIndex) => (
                    <NavLink
                      to={subItem.path}
                      key={subIndex}
                      className="sub-link-text"
                    >
                      <div className="icon">{subItem.icon}</div>
                      <div className="sub-link-text">{subItem.name}</div>
                    </NavLink>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
