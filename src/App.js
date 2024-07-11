import React from "react";
// =======================================
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  // Main/Header 가 이 상태를 공유해야함
  // 중앙상태 관리
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout setSearch={setSearch} />}>
          <Route
            index
            element={<Main search={search} setSearch={setSearch} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
