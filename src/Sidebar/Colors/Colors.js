import React from "react";
import "./Colors.css";

function Colors() {
  return (
    <div>
      <label className="sidebar-label-container color-title">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Black
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Blue
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Red
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>Green
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test2" />
        <span className="checkmark"></span>White
      </label>
    </div>
  );
}

export default Colors;
