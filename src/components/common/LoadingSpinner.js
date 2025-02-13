import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner">
        <span className="spinner-emoji">😊</span>
      </div>
      <p className="spinner-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
