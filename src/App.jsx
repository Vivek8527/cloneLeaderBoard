import { BrowserRouter, Route, Routes } from "react-router-dom";
// import sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import Layout from "./pages/Layout";
import HostEarning from "./pages/Hostearning/HostEarning";
import Hostmanagement from "./pages/Hostmanagement/hostmanagement";
import Hostrejected from "./pages/Allhost/allhost";
import Acceptedhost from "./pages/Acceptedhost/acceptedhost";
import HostRequest from "./pages/Hostrequest/Hostrequest"

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
            <Route path="/hostrejected" element={<Hostrejected />} />
            <Route path="/Acceptedhost" element={<Acceptedhost />} />
            <Route path="/Hostrequest" element={<HostRequest />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
