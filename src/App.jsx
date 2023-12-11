import { BrowserRouter, Route, Routes } from "react-router-dom";
// import sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllHost from "../src/pages/Allhost/index";
import Hostmanagement from "../src/pages/Allhost/Table/Table2/table2";

import "./App.css";
import Layout from "./pages/Layout/layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<>Navbar</>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/allHost" element={<AllHost />} />
            <Route path="/Hostmanagement" element={<Hostmanagement />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
