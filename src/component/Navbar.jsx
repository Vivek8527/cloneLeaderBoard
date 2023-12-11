import { PiMagnifyingGlassThin } from "react-icons/pi";
import "./Navbar.css";
import { FaUserAstronaut } from "react-icons/fa";

export function Navbar() {
  return (
    <nav>
      <div className="search_icon">
        <PiMagnifyingGlassThin />
        <input placeholder="Search" style={{borderRadius:"15px solid"}}></input>
      </div>
      <div className="container__admin">
        <h1>Darren Ritchie </h1>
        <div className="admin__icon">
          <FaUserAstronaut />
        </div>
      </div>
    </nav>
  );
}
