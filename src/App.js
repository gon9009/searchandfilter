import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [likedEmojis, setLikedEmojis] = useState([]);

  // Layout/ Main 은 기본 뷰
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
          <Route
            path="/categories/:categoryName"
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
