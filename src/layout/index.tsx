import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="w-screen h-screen relative">
      <Navbar />
      <Sidebar />
      <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
