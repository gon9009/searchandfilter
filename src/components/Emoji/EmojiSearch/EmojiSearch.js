import React from "react";
import "./EmojiSearch.scss";
import { FaSearch } from "react-icons/fa";
import { useStore } from "../../../store/useStore";

function EmojiSearch() {
  const setSearch = useStore((state) => state.setSearch);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="emoji-search-container">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          onChange={handleInputChange}
          type="text"
          placeholder="이모지를 검색하세요!"
        />
      </div>
    </div>
  );
}

export default EmojiSearch;
