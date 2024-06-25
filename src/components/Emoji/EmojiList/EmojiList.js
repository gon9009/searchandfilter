import React from "react";
import EmojiCard from "../EmojiCard/EmojiCard";
import "./EmojiList.scss";

// 이모지 렌더링 컴포넌트
function EmojiList({ filteredData }) {
  return (
    <section className="emoji-list-container">
      {filteredData.map((emoji) => (
        <EmojiCard key={`${emoji.name}-${emoji.category}`} emoji={emoji} />
      ))}

      <button>Prev</button>
    </section>
  );
}

export default EmojiList;
