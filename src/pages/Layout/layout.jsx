import Sidebar from "../../component/Sidebar/sidebar";
import { Navbar } from "../../component/Navbar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />
      <main>
        <Navbar></Navbar>

        {children}
      </main>
    </div>
  );
}

export default Layout;
