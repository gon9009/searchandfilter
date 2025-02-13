import React from "react";
import { EmojiHeartIcon } from "../common/Icons";

const EmojiCard = ({ emojiIcon }) => {
  return (
    <div className="emoji-card">
      <p className="emoji">{emojiIcon}</p>
      <EmojiHeartIcon />
    </div>

    // 아이콘 -> Svg로 취급
  );
};

export default EmojiCard;
