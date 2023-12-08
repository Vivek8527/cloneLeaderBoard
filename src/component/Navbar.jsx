import { PiMagnifyingGlassThin } from "react-icons/pi";

export function Navbar() {
  return (
    <nav>
      <div className="search_icon">
        <PiMagnifyingGlassThin />

        <input
          placeholder="Search"
          style={{
            borderRadius: "20px",
            border: "none",
          }}
        ></input>
      </div>
    </nav>
  );
}
