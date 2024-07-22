import React, { useState } from "react";
import { decode } from "html-entities";
import "./EmojiCard.scss";
import { IoHeart } from "react-icons/io5";

// 개별 이모지
function EmojiCard({ emoji, copyToClipboard, likedEmojis, setLikedEmojis }) {
  const [copy, setCopy] = useState(false);
  const { name, htmlCode, category, group } = emoji;
  const emojiString = decode(htmlCode[0]);

  const isLiked = likedEmojis.some((e) => e.name === emoji.name);
  
  // 
  const handleClick = (event) => {
    event.stopPropagation();
    if (isLiked) {
      setLikedEmojis(likedEmojis.filter((e) => e.name !== emoji.name));
    } else {
      setLikedEmojis([...likedEmojis, emoji]);
    }
  };

  const handleCopyToClipboard = () => {
    copyToClipboard(emojiString);
    setCopy(true);
    // 2초가 지나면 사라지도록
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div onClick={handleCopyToClipboard} className="emoji-background">
      <div className="emoji-item">
        <div style={{ fontSize: "3rem" }}>{emojiString}</div>
        <div className="like-btn" onClick={handleClick}>
          {isLiked ? (
            <IoHeart style={{ color: "red" }} />
          ) : (
            <IoHeart style={{ border: "none", color: "lightgray" }} />
          )}
        </div>
      </div>
      {copy && <p className="copy-message">복사완료!</p>}
    </div>
  );
}

export default EmojiCard;
