import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { LuLayoutDashboard } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaSnapchatGhost } from "react-icons/fa";

// import "./App.css";
// eslint-disable-next-line react/prop-types
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <LuLayoutDashboard />,
    },

    {
      path: "/allHost",
      name: "All Host",
      icon: <FaSnapchatGhost />,
    },
    {
      path: "/Hostmanagement",
      name: "Hostmanagement",
      icon: "",
    },
    {
      path: "/Hostearning",
      name: "Hostearning",
      icon: "",
    },
    {
      path: "/Acceptedhost",
      name: "Acceptedhost",
      icon: "",
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="logo"
          ></h1>

          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ width: isOpen ? "block" : "none" }}
              className="link-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;