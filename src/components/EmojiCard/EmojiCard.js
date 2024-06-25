import React from "react";
import { decode } from "html-entities";
import "./EmojiCard.scss";
import { CiHeart } from "react-icons/ci";

function EmojiCard({ emoji }) {
  const { name, htmlCode } = emoji;
  const emojiString = decode(htmlCode[0]);

  return (
    <div className="emoji-background">
      <div className="item">
        <div style={{ fontSize: "3rem" }}>{emojiString}</div>
        <CiHeart />
      </div>
    </div>
  );
}

export default EmojiCard;
