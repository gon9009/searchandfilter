import React from "react";
import "./EmojiSearch.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

// 탠스택 쿼리
function EmojiSearch() {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="emoji-search-container">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          placeholder="이모지를 검색하세요!"
        />
      </div>
    </div>
  );
}

export default EmojiSearch;
