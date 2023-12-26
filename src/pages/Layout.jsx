import { Navbar } from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/sidebar";

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
       
      <Navbar />
        {children}
      </main>
    </div>
  );
}

export default Layout;
