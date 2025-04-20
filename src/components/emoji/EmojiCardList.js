import React from "react";
import EmojiCard from "./EmojiCard";

const EmojiCardList = ({ emojis }) => {
  return (
    // 각 컴포넌트별 "필요한 데이터 만 전달"
    <section className="emoji-cards">
      <div className="section-wrapper">
        <div className="emoji-cards-container">
          {emojis.map((emoji) => {
            return <EmojiCard key={emoji.slug} emojiIcon={emoji.character} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default EmojiCardList;
