import React, { useState } from "react";
import { decode } from "html-entities";
import "./EmojiCard.scss";
import { IoHeart } from "react-icons/io5";
import { useStore } from "../../../store/useStore";

// 개별 이모지
function EmojiCard({ emoji, handleCopyToClipboard }) {
  // 스토어에서 가져오기
  const { likedEmojis, toggleLikeEmoji } = useStore((state) => ({
    likedEmojis: state.likedEmojis,
    toggleLikeEmoji: state.toggleLikeEmoji,
  }));

  const [copy, setCopy] = useState(false);
  const { htmlCode } = emoji;
  const emojiString = decode(htmlCode[0]);

  // 좋아요한 이모지 T F 검사
  const isLiked = likedEmojis.some((e) => e.name === emoji.name);

  // 좋아요 버튼 클릭시
  const handleLikedClick = (event) => {
    event.stopPropagation();
    toggleLikeEmoji(emoji, isLiked);
  };

  // 이모지 클릭시 CopiedEmoji 배열에 저장
  const handleCopyClick = () => {
    handleCopyToClipboard(emojiString);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div onClick={handleCopyClick} className="btn btn-emoji-bg">
      <div className="emoji-item">
        <div style={{ fontSize: "3rem" }}>{emojiString}</div>
        <div className="liked" onClick={handleLikedClick}>
          {isLiked ? (
            <IoHeart style={{ color: "red" }} />
          ) : (
            <IoHeart style={{ color: "#E0E0E0" }} />
          )}
        </div>
      </div>
      {copy && <p className="copy-message">복사완료!</p>}
    </div>
  );
}

export default EmojiCard;
