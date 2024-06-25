import React from "react";
import EmojiSearch from "../EmojiSearch/EmojiSearch";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss"; // 스타일 파일 임포트

function EmojiContainer({ setSearch, filteredData }) {
  return (
    <div className="emoji-container" style={{ border: "1px solid red" }}>
      <EmojiSearch setSearch={setSearch} />
      <EmojiList filteredData={filteredData} />
    </div>
  );
}

export default EmojiContainer;
