import { useNavigate } from "react-router-dom";
import "./table.css";
import { FaArrowLeft } from "react-icons/fa";

// console.log(fakeDataArray);
// eslint-disable-next-line react/prop-types
const TableContainer = ({ children, title }) => {

const navigate = useNavigate();

  return (
    <div className="container_body">
      <div className="host__icon">
        <div className="icon_arrow">
          <FaArrowLeft  onClick={() => navigate(-1)}/>
        </div>
        <h1 style={{ fontSize: "1.5rem", paddingLeft: "1rem" }}>{title}</h1>
      </div>
      {children}
    </div>
  );
};
export default TableContainer;
