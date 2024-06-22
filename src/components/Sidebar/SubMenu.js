import React, { useState } from "react";
import "./SubMenu.scss";

function SubMenu({ data }) {
  // 서브 카테고리 state로 관리
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);

  // button>p>div
  return (
    <>
      <div className="sidebar-filter">
        <button onClick={showSubNav}>
          <p> {data.categoryName}</p>
          <span>{data.iconClosed}</span>
        </button>
      </div>

      {subNav &&
        data.subCategory.map((sub) => {
          return (
            <button key={sub.title}>
              {sub.title}
              <p>{sub.emoji}</p>
            </button>
          );
        })}
    </>
  );
}

export default SubMenu;
