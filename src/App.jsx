import { BrowserRouter, Route, Routes } from "react-router-dom";
// import sidebar from "./component/sidebar";
import Dashboard from "./component/Dashboard/Dashboard";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Hostrejected from "./pages/Hostrejected/Hostrejected";
import Hostaccepted from "./pages/Acceptedhost/Hostaccepted";
import HostRequest from "./pages/Hostrequest/Hostrequest";
import Loginpage from "./pages/Loginpage/login";
import Report from "./pages/Report/Report";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />

          <Route path="/" element={<></>} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/Hostrequest"
            element={
              <Layout>
                <HostRequest />
              </Layout>
            }
          />
          <Route
            path="/Hostaccepted"
            element={
              <Layout>
                <Hostaccepted />
              </Layout>
            }
          />
          <Route
            path="/hostrejected"
            element={
              <Layout>
                <Hostrejected />
              </Layout>
            }
          />
          <Route
            path="/report"
            element={
              <Layout>
                <Report />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
