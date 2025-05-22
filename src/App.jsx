import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import Group from "./Pages/Group";
import Search from "./Pages/Search";
import Liked from "./Pages/Liked";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
