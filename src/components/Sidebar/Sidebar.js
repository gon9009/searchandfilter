import "./Sidebar.scss";
import SidebarData from "./SidebarData";
import SubMenu from "./Submenu/SubMenu";

function Sidebar() {
  return (
    <aside className="sidebar-container">
      {SidebarData.map((data) => (
        <SubMenu data={data} key={data.categoryId} />
      ))}
    </aside>
  );
}

export default Sidebar;
