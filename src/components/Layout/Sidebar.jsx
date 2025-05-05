// Sidebar.js
import { NavLink } from "react-router-dom";
import { useGetSidebarData } from "../../lib/queries";
import { formatTitle } from "../../utils/utils";
import LoadingSpinner from "../common/LoadingSpinner";

const Sidebar = () => {
  // 사이드바 데이터 불러오기
  const { data: sidebarData, isLoading } = useGetSidebarData();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <aside className="sidebar">
      <SidebarList categories={sidebarData} />
    </aside>
  );
};

// 사이드바 리스트 , 사이드바 아이템들의 묶음
const SidebarList = ({ categories }) => {
  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__menu">
        {categories
          .filter((category) => category.slug !== "component") // ❌ 제외
          .map((category) => (
            <SidebarItem
              key={category.slug}
              title={category.slug}
              link={`/group/${category.slug}`} // ✅ 슬래시 꼭 붙이기!!
            />
          ))}
        {/* Liked 메뉴 추가 */}
        <SidebarItem key="liked" title="Liked" link="/liked" />
      </ul>
    </nav>
  );
};

// 개별 사이드바 아이템 , 클릭시 라우트 이동
// URL 과 to = {link} 값이 같으면 isActive 가 true 가 됨
const SidebarItem = ({ title, link }) => {
  return (
    <li className="sidebar__item">
      <NavLink
        to={link}
        aria-label={title}
        className={
          ({ isActive }) => `sidebar__item ${isActive ? "active" : ""}` // 활성화 상태에 따라 스타일 적용
        }
      >
        <span>{formatTitle(title)}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;
