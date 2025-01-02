// Sidebar.js
import { Link } from "react-router-dom";
import { useGetSidebarData } from "../../lib/queries";

// 사이드바 전체
const Sidebar = () => {
  // 사이드바 데이터를 불러오는 함수
  const { data: sidebarData = [], isLoading, isError } = useGetSidebarData();
  // 로딩,에러 상태 관리
  if (isLoading) return <aside className="sidebar">로딩 중...</aside>;
  if (isError) return <aside className="sidebar">에러 발생</aside>;
  console.log(sidebarData);
  return (
    <aside className="sidebar">
      <SidebarList categories={sidebarData} />
    </aside>
  );
};

// 사이드바 리스트 , 사이드바 아이템들의 묶음
const SidebarList = ({ categories }) => {
  return (
    <ul className="nav-list">
      {categories.map((category) => (
        <SidebarItem
          key={category.slug}
          title={category.slug}
          link={`/categories/${category.slug}`} // 수정사항
        />
      ))}
    </ul>
  );
};

// 개별 사이드바 아이템 , 클릭시 이동시킨다
const SidebarItem = ({ title, link }) => {
  return (
    <li className="nav-item">
      <Link to={link} className="nav-link" aria-label={title}>
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default Sidebar;
