import React, { useState } from "react";
import "./SubMenu.scss";
import { useNavigate } from "react-router";

function SubMenu({ data }) {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <>
      {/* 카테고리 메뉴 */}
      <div className="sidebar-category">
        <button onClick={showSubNav}>
          <p className="category-name"> {data.categoryName}</p>
          <div>{subNav ? data.iconClosed : data.iconOpened}</div>
        </button>
      </div>
      {/* 서브 메뉴 */}
      <div className="category-submenu">
        {subNav &&
          data.subCategory.map((sub) => (
            <button
              onClick={() => handleNavigate(sub.urltitle.toLowerCase())}
              key={sub.title}
            >
              {sub.title}
              <p>{sub.emoji}</p>
            </button>
          ))}
      </div>
    </>
  );
}

export default SubMenu;
