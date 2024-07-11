import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router";

function Layout({setSearch}) {
  return (
    <>
      <Header setSearch={setSearch}/>
      <main className="main-container">
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
