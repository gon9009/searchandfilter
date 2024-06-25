import React, { useState } from "react";
import { decode } from "html-entities";
import "./EmojiCard.scss";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";

function EmojiCard({ emoji }) {
  const [like, setLike] = useState(false);

  const { name, htmlCode } = emoji;
  const emojiString = decode(htmlCode[0]);

  const handleClick = () => {
    setLike(!like);
  };
  return (
    <div className="emoji-background">
      <div className="emoji-item">
        <div style={{ fontSize: "3rem" }}>{emojiString}</div>
        <div className="like-btn" onClick={handleClick}>
          {like ? <IoHeart style={{ color: "red" }} /> : <CiHeart />}
        </div>
      </div>
    </div>
  );
}

export default EmojiCard;
