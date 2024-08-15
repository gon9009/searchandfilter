import React from "react";

const SubMenuButton = ({ title, emoji, onClick }) => (
  <button
    className="btn btn-submenu"
    onClick={onClick}
  >
    {title}
    <p>{emoji}</p>
  </button>
);

export default SubMenuButton;
