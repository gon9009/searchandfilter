import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss";
import PaginationContainer from "../Pagination/PaginationContainer";
import EmojiTextArea from "../EmojiTextArea/EmojiTextArea";

function EmojiContainer({
  handleNextPage,
  handlePrevPage,
  filteredData,
  setSearch,
  setPage,
  copyToClipboard,
  totalPages,
  page,
  likedEmojis,
  setLikedEmojis,
}) {
  return (
    <div className="emoji-container">
      <EmojiTextArea />
      <EmojiList
        copyToClipboard={copyToClipboard}
        filteredData={filteredData}
        setSearch={setSearch}
        likedEmojis={likedEmojis}
        setLikedEmojis={setLikedEmojis}
      />
      <PaginationContainer
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        setPage={setPage}
        totalPages={totalPages}
        page={page}
      />
    </div>
  );
}

export default EmojiContainer;
