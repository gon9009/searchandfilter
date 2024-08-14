import React, { useState } from "react";
import "./SubMenu.scss";
import { useNavigate } from "react-router";
import CategoryButton from "./CategoryButton";
import SubMenuButton from "./SubMenuButton";

function SubMenu({ data }) {
  const [subNav, setSubNav] = useState(false);
  // 하위 매뉴 토글
  const toggleSubNav = () => setSubNav(!subNav);

  // Navigate로 컴포넌트 이동
  const navigate = useNavigate();
  const handleNavigate = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <>
    {/* 카테고리 */}
      <CategoryButton
        categoryName={data.categoryName}
        icon={subNav ? data.iconClosed : data.iconOpened}
        onClick={toggleSubNav}
      />
      {/* 서브메뉴 */}
      {subNav && (
        <div className="category-submenu">
          {data.subCategory.map((sub) => (
            <SubMenuButton
              key={sub.urltitle}
              title={sub.title}
              emoji={sub.emoji}
              onClick={() => handleNavigate(sub.urltitle.toLowerCase())}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default SubMenu;
