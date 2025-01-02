import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import TextArea from "./TextArea";

function Layout() {
  return (
    <>
      <Header />
      <>
        <Sidebar />
        <TextArea />
        <main>
          {/* EmojiCardList , EmojiCard, Pagination */}
          <Outlet />
        </main>
      </>
    </>
  );
}

export default Layout;
