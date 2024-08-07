import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

// 렌더링 역할만 (컴포넌트 분리)
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
