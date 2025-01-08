import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import Group from "./Pages/Group";
import Search from "./Pages/Search";
import Liked from "./Pages/Liked";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="group/:slug" element={<Group />} />
          <Route path="search" element={<Search />} />
          <Route path="liked" element={<Liked />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
