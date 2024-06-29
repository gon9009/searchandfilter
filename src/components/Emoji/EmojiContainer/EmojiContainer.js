import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss";
import EmojiPageButton from "../EmojiPageButton/EmojiPageButton";
import EmojiFilter from "../EmojiFilter/EmojiFilter";

function EmojiContainer({
  handleNextPage,
  handlePrevPage,
  filteredData,
  setSearch,
  setPage,
  copyToClipboard,
}) {
  return (
    <div className="emoji-container">
      <EmojiFilter />
      <EmojiList
        copyToClipboard={copyToClipboard}
        filteredData={filteredData}
        setSearch={setSearch}
      />
      <EmojiPageButton
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        setPage={setPage}
      />
    </div>
  );
}

export default EmojiContainer;
