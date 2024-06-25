import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
