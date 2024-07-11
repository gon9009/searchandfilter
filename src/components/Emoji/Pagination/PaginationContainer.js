import React from "react";
import PageButton from "./PageButton";
import Pagination from "./Pagination";
import "./PaginationContainer.scss";

// 이전버튼 / 페이지네이션 / 다음 버튼 포함
function PaginationContainer({
  page,
  totalPages,
  handleNextPage,
  handlePrevPage,
}) {
  return (
    <div className="pagination-container">
      <PageButton
        page={page}
        totalPages={totalPages}
        direction="prev"
        handleClick={handlePrevPage}
      />
      <Pagination page={page} totalPages={totalPages} />
      <PageButton
        page={page}
        totalPages={totalPages}
        direction="next"
        handleClick={handleNextPage}
      />
    </div>
  );
}

export default PaginationContainer;
