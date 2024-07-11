import React, { useState } from "react";
import { decode } from "html-entities";
import "./EmojiCard.scss";
import { CiHeart } from "react-icons/ci";
import { IoHeart } from "react-icons/io5";
// 개별 이모지 
function EmojiCard({ emoji, copyToClipboard }) {
  const [like, setLike] = useState(false);
  const [copy, setCopy] = useState(false);
  const { name, htmlCode, category, group } = emoji;
  const emojiString = decode(htmlCode[0]);

  // 좋아요 상태 저장
  const handleClick = () => {
    setLike(!like);
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
          {like ? <IoHeart style={{ color: "red" }} /> : <CiHeart />}
        </div>
      </div>
      {copy && <p className="copy-message">복사완료!</p>}
    </div>
  );
}

export default EmojiCard;
