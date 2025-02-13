import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import CopyAndPaste from "./CopyAndPaste";

function Layout() {
  return (
    <>
      <Header />
      <>
        <main className="container">
          <Sidebar />
          <div className="main-wrapper">
            <CopyAndPaste />
            <Outlet />
          </div>
        </main>
      </>
    </>
  );
}

export default Layout;
