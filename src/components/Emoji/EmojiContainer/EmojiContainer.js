import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss";
import PaginationContainer from "../Pagination/PaginationContainer";
import EmojiTextArea from "../EmojiTextArea/EmojiTextArea";
import { useStore } from "../../../store/useStore";
import EmptyStateMessage from "../../Common/EmptyStateMessage";

function EmojiContainer({
  filteredData,
  totalPages,
  isLoading,
  categoryName,
  handleCopyToClipboard,
  page,
  setPage,
}) {
  const likedEmojis = useStore((state) => state.likedEmojis);

  // 검색 결과
  const isEmptyState = () => {
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
    return null;
  };

  const emptyStateType = isEmptyState();

  return (
    <div className="emoji-container">
      <EmojiTextArea />
      {emptyStateType ? (
        <section className="empty-result-container">
          <EmptyStateMessage type={emptyStateType} />
        </section>
      ) : (
        <>
          <EmojiList
            filteredData={filteredData}
            isLoading={isLoading}
            categoryName={categoryName}
            handleCopyToClipboard={handleCopyToClipboard}
          />
          <PaginationContainer
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
}

export default EmojiContainer;
