import React from "react";
import { useLocation } from "react-router";

const Group = () => {
  const { pathname } = useLocation();
  return <div>{pathname} 페이지 입니다</div>;
};

export default Group;
