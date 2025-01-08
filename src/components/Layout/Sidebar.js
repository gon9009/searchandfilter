// Sidebar.js
import { NavLink } from "react-router-dom";

// 하드코딩된 이모지 사이드바 구조
const emojiGroups = [
  "Smileys_Emotion",
  "People_Body",
  "Component",
  "Animals_Nature",
  "Food_Drink",
  "Travel_Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

const Sidebar = () => {
  // 하드코딩된 사이드바 데이터 사용
  return (
    <aside className="sidebar">
      <SidebarList categories={emojiGroups} />
    </aside>
  );
};

// 사이드바 리스트 , 사이드바 아이템들의 묶음
const SidebarList = ({ categories }) => {
  return (
    <ul className="nav-list">
      {categories.map((category) => (
        <SidebarItem
          key={category}
          title={category.replace("_", " ")}
          link={`/group/${category}`} // 그룹 이름을 그대로 URL로 사용
        />
      ))}
    </ul>
  );
};

// 개별 사이드바 아이템 , 클릭시 이동시킨다
const SidebarItem = ({ title, link }) => {
  return (
    <li className="nav-item">
      <NavLink
        to={link}
        className="nav-link"
        activeClassName="active"
        aria-label={title}
      >
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;
