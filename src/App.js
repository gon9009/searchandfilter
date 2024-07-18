import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  // 전역 상태 (검색,좋아요)
  const [search, setSearch] = useState("");
  const [likedEmojis, setLikedEmojis] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout setSearch={setSearch} />}>
          <Route
            index
            element={
              <Main
                likedEmojis={likedEmojis}
                setLikedEmojis={setLikedEmojis}
                search={search}
                setSearch={setSearch}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
