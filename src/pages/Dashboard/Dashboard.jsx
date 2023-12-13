import "./Dashboard.css";
import { FaUserSecret, FaCoins, FaUsers } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Box = ({ title, icon, numbers }) => {
  return (
    <div className="box">
      <p style={{ padding: ".4rem", fontSize: "1.0rem", fontWeight: "bold" }}>
        {title}
      </p>
      <p>{numbers}</p>
      <span style={{ fontSize: "1.8rem" }}>{icon}</span>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <div className="color_1">
        <div className="four_boxes">
          <Box title="Active Host" icon={<FaUserSecret />} />
          <Box title="Inactive Host" icon={<FaUserSecret />} />
          <Box title="New Request Of Host" icon={<FaUsers />} />
          <Box title="Total Coins" icon={<FaCoins />} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
