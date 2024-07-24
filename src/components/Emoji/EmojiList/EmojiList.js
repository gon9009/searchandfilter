import React from "react";
import EmojiCard from "../EmojiCard/EmojiCard";
import "./EmojiList.scss";
import EmptyStateMessage from "../../Common/EmptyStateMessage";

// 이모지 렌더링 컴포넌트
function EmojiList({
  filteredData,
  copyToClipboard,
  likedEmojis,
  setLikedEmojis,
  isLoading,
  categoryName,
}) {
  // 검색결과/좋아요 이모지 조건
  const getMessageType = () => {
    if (isLoading) {
      return null; // 데이터 로딩 중에는 메시지 표시하지 않음
    }

    if (categoryName === "liked") {
      // 좋아요 카테고리에서 좋아요 이모지가 없는 경우
      if (likedEmojis.length === 0) {
        return "noLiked";
      }
      if (filteredData.length === 0) {
        return "noSearch";
      }
    } else {
      // 일반 카테고리 또는 검색 결과가 없는 경우
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
              likedEmojis={likedEmojis}
              setLikedEmojis={setLikedEmojis}
            />
          ))}
        </section>
      )}
    </>
  );
}

export default EmojiList;
