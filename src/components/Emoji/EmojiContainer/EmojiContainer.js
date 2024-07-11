import React from "react";
import EmojiList from "../EmojiList/EmojiList";
import "./EmojiContainer.scss";
import EmojiFilter from "../EmojiFilter/EmojiFilter";
import PaginationContainer from "../Pagination/PaginationContainer";

function EmojiContainer({
  handleNextPage,
  handlePrevPage,
  filteredData,
  setSearch,
  setPage,
  copyToClipboard,
  totalPages,
  page,
}) {
  return (
    <div className="emoji-container">
      <EmojiFilter />
      <EmojiList
        copyToClipboard={copyToClipboard}
        filteredData={filteredData}
        setSearch={setSearch}
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
