import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import ClipboardPanel from "./ClipboardPanel";

function Layout() {
  return (
    <>
      <Header />
      <>
        <main className="container">
          <Sidebar />
          <div className="main-wrapper">
            <ClipboardPanel />
            <Outlet />
          </div>
        </main>
      </>
    </>
  );
}

export default Layout;
