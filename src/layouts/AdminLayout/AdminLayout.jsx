import React from "react";
import { Outlet } from "react-router-dom";

import "./Admin.scss";
import SideNav from "./Components/SideNav";

const AdminLayout = () => {
  return (
    <>
      <div id="layoutSidenav">
        <SideNav />
        <div id="layoutSidenav_content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
