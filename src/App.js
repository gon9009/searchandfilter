import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import Category from "./Pages/Category";
import Search from "./Pages/Search";
import Liked from "./Pages/Liked";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:slug" element={<Category />} />
          <Route path="search" element={<Search />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

