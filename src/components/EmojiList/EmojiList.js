import React from "react";
import EmojiCard from "../EmojiCard/EmojiCard";
import "./EmojiList.scss";

function EmojiList() {
  return (
    <section className="emoji-list-container">
      <EmojiCard />
    </section>
  );
}

export default EmojiList;
