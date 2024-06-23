import React from "react";
import EmojiCard from "../EmojiCard/EmojiCard";
import "./EmojiList.scss";

function EmojiList({ filteredData }) {
  return (
    <section className="emoji-list-container">
      {filteredData.map((emoji) => (
        <EmojiCard key={`${emoji.name}-${emoji.category}`} emoji={emoji} />
      ))}
    </section>
  );
}

export default EmojiList;
