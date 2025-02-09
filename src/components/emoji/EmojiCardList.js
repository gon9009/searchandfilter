import React from "react";
import EmojiCard from "./EmojiCard";
import Pagination from "./Pagination";

const EmojiCardList = ({emojis}) => {
  return (
    // 각 컴포넌트별 "필요한 데이터 만 전달"
    <section class="emoji-cards-list">
      {emojis.map((emoji) => {
        return (
          <EmojiCard />
        )
      })}
      <Pagination emojis={emojis}/>
    </section>
  );
};

export default EmojiCardList;
