import { BrowserRouter, Route, Routes } from "react-router-dom";
// import sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AllHost from "../src/pages/Allhost/index";

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
