import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss";
import PaginationContainer from "../Pagination/PaginationContainer";
import EmojiTextArea from "../EmojiTextArea/EmojiTextArea";

function EmojiContainer({
  filteredData,
  copyToClipboard,
  totalPages,
  copiedEmoji,
  setCopiedEmoji,
  isLoading,
  categoryName,
  handleCopyToClipboard,
  page,
  setPage,
}) {
  return (
    <div className="emoji-container">
      <EmojiTextArea
        setCopiedEmoji={setCopiedEmoji}
        copiedEmoji={copiedEmoji}
      />
      <EmojiList
        copyToClipboard={copyToClipboard}
        filteredData={filteredData}
        copiedEmoji={copiedEmoji}
        setCopiedEmoji={setCopiedEmoji}
        isLoading={isLoading}
        categoryName={categoryName}
        handleCopyToClipboard={handleCopyToClipboard}
      />
      <PaginationContainer
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default EmojiContainer;
