// Sidebar.js
import { NavLink } from "react-router-dom";

// 하드코딩된 이모지 사이드바 구조
const sidebarGroup = [
  { name: "Smileys & Emotion", route: "/group/smileys_emotion" },
  { name: "People & Body", route: "/group/people_body" },
  { name: "Component", route: "/group/component" },
  { name: "Animals & Nature", route: "/group/animals_nature" },
  { name: "Food & Drink", route: "/group/food_drink" },
  { name: "Travel & Places", route: "/group/travel_places" },
  { name: "Activities", route: "/group/activities" },
  { name: "Objects", route: "/group/objects" },
  { name: "Symbols", route: "/group/symbols" },
  { name: "Flags", route: "/group/flags" },
  { name: "Liked", route: "/liked" },
];

const Sidebar = () => {
  // 하드코딩된 사이드바 데이터 사용
  return (
    <aside className="sidebar">
      <SidebarList categories={sidebarGroup} />
    </aside>
  );
};

// 사이드바 리스트 , 사이드바 아이템들의 묶음
const SidebarList = ({ categories }) => {
  return (
    <nav className="sidebar__nav">
      <ul className="sidebar__menu">
        {categories.map((category) => (
          <SidebarItem
            key={category.name}
            title={category.name}
            link={`${category.route}`} // 그룹 이름을 그대로 URL로 사용
          />
        ))}
      </ul>
    </nav>
  );
};

// 개별 사이드바 아이템 , 클릭시 이동시킨다
const SidebarItem = ({ title, link }) => {
  return (
    <li className="sidebar__item">
      <NavLink
        to={link}
        aria-label={title}
        // isActive 로 현재 경로와 to 값을 비교
        className={
          ({ isActive }) => `sidebar__item ${isActive ? "active" : ""}` // 활성화 상태에 따라 스타일 적용
        }
      >
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;
