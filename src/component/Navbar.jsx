import { PiMagnifyingGlassThin } from "react-icons/pi";
import "./Navbar.css";
import { FaUserAstronaut } from "react-icons/fa";


export function Navbar() {
  
  return (
    <nav>
      <div className="search_icon">
        <PiMagnifyingGlassThin />
        <input placeholder="Search"></input>
      </div>
      <div className="container__admin">
        <h1 style={{ color: "#E94B89" }}>Darren Ritchie </h1>
        <div className="admin__icon">
          <FaUserAstronaut />
        
        </div>
      </div>
    </nav>
  );
}
