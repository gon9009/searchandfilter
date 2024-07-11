import React, { useState } from "react";
import "./SubMenu.scss";
import { useNavigate } from "react-router";

function SubMenu({ data }) {
  const [subNav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subNav);
  const navigate = useNavigate();

  return (
    <>
      <div className="sidebar-category">
        <button onClick={showSubNav}>
          <p className="category-name"> {data.categoryName}</p>
          <div>{subNav ? data.iconClosed : data.iconOpened}</div>
        </button>
      </div>

      <div className="category-submenu">
        {subNav &&
          data.subCategory.map((sub) => {
            return (
              <button key={sub.title}>
                {sub.title}
                <p>{sub.emoji}</p>
              </button>
            );
          })}
      </div>
    </>
  );
}

export default SubMenu;
