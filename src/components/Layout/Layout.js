import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
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

//
