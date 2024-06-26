import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss"; // 스타일 파일 임포트
import EmojiPageButton from "../EmojiPageButton/EmojiPageButton";
import EmojiFilter from "../EmojiFilter/EmojiFilter";

function EmojiContainer({ filteredData }) {
  return (
    <div className="emoji-container">
      <EmojiFilter />
      <EmojiList filteredData={filteredData} />
      <EmojiPageButton />
    </div>
  );
}

export default EmojiContainer;
