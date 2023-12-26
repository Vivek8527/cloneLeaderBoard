/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import userHook from "../../hook/userHook";
import { Boxes } from "../../component/Boxes";
import "./Dashboard.css";
import Graph from "../../component/Graph/graph";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";

const Dashboard = () => {
  const { user } = userHook();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div>
    
      <Boxes />
      <Graph />
    </div>
  );
};

export default Dashboard;
