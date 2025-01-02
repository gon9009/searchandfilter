import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query.trim()}`);
    }
  };

  return (
    <header>
      <div className="wrapper">
        <Link to={"/"}>emojihub</Link>
        <div className="인풋">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="이모지를 검색하세용 "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
