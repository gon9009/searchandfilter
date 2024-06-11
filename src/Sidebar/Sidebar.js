import React from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";


function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
          <Category />
          <Price />
          <Colors />
        </div>
      </section>
    </>
  );
}

export default Sidebar;
