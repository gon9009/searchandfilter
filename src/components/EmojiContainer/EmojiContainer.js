import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import EmojiSearch from "../EmojiSearch/EmojiSearch";
import "./EmojiContainer.scss"; // 스타일 파일 임포트

function EmojiContainer({ setSearch, filteredData }) {
  return (
    <div className="emoji-container">
      <EmojiSearch setSearch={setSearch} />
      <EmojiList filteredData={filteredData} />
    </div>
  );
}

export default EmojiContainer;
