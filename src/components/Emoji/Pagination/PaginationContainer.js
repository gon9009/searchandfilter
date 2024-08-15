import React from "react";
import PageButton from "./PageButton";
import Pagination from "./Pagination";
import "./PaginationContainer.scss";

function PaginationContainer({ page, setPage, totalPages }) {
  
  const handleNextPage = () => {
    setPage((page) => Math.min(page + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((page) => Math.max(page - 1, 1));
  };

  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <section className="pagination-container">
      <PageButton
        direction="prev"
        handleClick={handlePrevPage}
        isFirstPage={isFirstPage}
      />
      <Pagination page={page} totalPages={totalPages} />
      <PageButton
        direction="next"
        handleClick={handleNextPage}
        isLastPage={isLastPage}
      />
    </section>
  );
}

export default PaginationContainer;
