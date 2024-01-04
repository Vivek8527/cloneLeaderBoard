/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import userHook from "../../hook/userHook";
import { Boxes } from "../Boxes/Boxes";
import "./Dashboard.css";
import Graph from "../Graph/graph";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

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
    
      <Navbar/>
      <Boxes />
      <Graph />
    </div>
  );
};

export default Dashboard;
