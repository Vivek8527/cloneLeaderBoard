import { BrowserRouter, Route, Routes } from "react-router-dom";
// import sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import Layout from "./pages/Layout/layout";
import HostEarning from "./pages/Hostearning/HostEarning";
import Hostmanagement from "./pages/Hostmanagement/hostmanagement"
import Allhost from "./pages/Allhost/allhost"
import Acceptedhost from "./pages/Acceptedhost/acceptedhost";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Hostmanagement" element={<Hostmanagement />} />
            <Route path="/Hostearning" element={<HostEarning />} />
            <Route path="/allhost" element={<Allhost />} />
            <Route path="/Acceptedhost" element={<Acceptedhost />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      

    </>
  );
};

export default App;
