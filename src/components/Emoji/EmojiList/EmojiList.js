import React from "react";
import EmojiCard from "../EmojiCard/EmojiCard";
import "./EmojiList.scss";
import EmptyStateMessage from "../../Common/EmptyStateMessage";
import { useStore } from "../../../store/useStore";

// 이모지 렌더링 컴포넌트
function EmojiList({
  filteredData,
  copyToClipboard,
  isLoading,
  categoryName,
  setCopiedEmoji,
  handleCopyToClipboard,
}) {
  const { likedEmojis } = useStore((state) => ({
    likedEmojis: state.likedEmojis,
  }));

  const getMessageType = () => {
    if (isLoading) {
      return null; 
    }

    if (categoryName === "liked") {
      if (likedEmojis.length === 0) {
        return "noLiked";
      }
      if (filteredData.length === 0) {
        return "noSearch";
      }
    } else {
      if (filteredData.length === 0) {
        return "noSearch";
      }
    }
    return null; // 그 외의 경우에는 메시지 표시하지 않음
  };

  const type = getMessageType();

  return (
    <>
      {getMessageType() ? (
        <section className="empty-result-container">
          <EmptyStateMessage type={type} />
        </section>
      ) : (
        <section className="emoji-list-container">
          {filteredData.map((emoji) => (
            <EmojiCard
              key={`${emoji.name}-${emoji.category}`}
              emoji={emoji}
              copyToClipboard={copyToClipboard}
              setCopiedEmoji={setCopiedEmoji}
              handleCopyToClipboard={handleCopyToClipboard}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default EmojiList;
