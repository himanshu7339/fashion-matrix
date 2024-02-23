import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {" "}
      <div className="dashboard grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
