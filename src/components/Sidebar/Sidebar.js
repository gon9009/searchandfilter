import React from "react";
import "./Sidebar.scss";
import SidebarData from "./SidebarData";
import SubMenu from "./SubMenu";
// 사이드바는 항상 열려있음

function Sidebar() {
  return (
    <aside className="sidebar-container">
      {SidebarData.map((data) => {
        return <SubMenu data={data} key={data.categoryId} />;
      })}
    </aside>
  );
}

export default Sidebar;
