import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow p-6">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default Layout;