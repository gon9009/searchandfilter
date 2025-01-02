import React from "react";

function Home() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  console.log("API_KEY:", API_KEY);
  console.log("BASE_URL:", BASE_URL);
  return (
    <div>
      홈페이지입니다
      <img src="/assets/logo.png" alt="Logo" width={192} />
    </div>
  );
}

export default Home;
