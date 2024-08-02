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
      <button className="btn btn-category" onClick={showSubNav}>
        <p className="category-name"> {data.categoryName}</p>
        {subNav ? data.iconClosed : data.iconOpened}
      </button>
      {/* 서브 메뉴 subNav(True)*/}
      <div className={`category-submenu ${subNav ? "open" : ""}`}>
        {subNav &&
          data.subCategory.map((sub) => (
            <button
              className="btn btn-submenu"
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
