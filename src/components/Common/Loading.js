import React from "react";
import { CircularProgress } from "@mui/material";
import "./Loading.scss";

function Loading() {
  return (
    <div className="loading-container">
      <CircularProgress size={200} />;
    </div>
  ); // 크기 40으로 조정
}

export default Loading;
