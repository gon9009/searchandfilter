import React from "react";

const CategoryButton = ({ categoryName, icon, onClick }) => (
  <button
    className="btn btn-category"
    onClick={onClick}
  >
    <p className="category-name">{categoryName}</p>
    {icon}
  </button>
);

export default CategoryButton;
