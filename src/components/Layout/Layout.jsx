import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import { Outlet } from "react-router";
import ClipboardPanel from "./ClipboardPanel";
import { useState } from "react";

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    // 스크롤 방지
    document.body.style.overflow = !mobileOpen ? "hidden" : "auto";
  };
  return (
    <>
      <Header onMenuClick={handleToggleMobileMenu} />
      <main className="container">
        {/* 데스크탑 용 사이드바 */}
        <Sidebar />

        {/* 모바일용 사이드바 */}
        <MobileSidebar
          isOpen={mobileOpen}
          onClose={() => {
            setMobileOpen(false);
            document.body.style.overflow = "auto";
          }}
        />
        <div className="main-wrapper">
          <ClipboardPanel />
          <Outlet />
        </div>
      </main>
      {mobileOpen && (
        <div
          className="backdrop"
          onClick={() => {
            setMobileOpen(false);
            document.body.style.overflow = "auto";
          }}
        />
      )}
    </>
  );
}

export default Layout;
