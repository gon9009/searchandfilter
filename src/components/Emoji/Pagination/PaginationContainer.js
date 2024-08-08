import React from "react";
import PageButton from "./PageButton";
import Pagination from "./Pagination";
import "./PaginationContainer.scss";

function PaginationContainer({ page, setPage,totalPages }) {
  const handleNextPage = () => {
    setPage((page) => Math.min(page + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((page) => Math.max(page - 1, 1));
  };


  return (
    <section className="pagination-container">
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
    </section>
  );
}

export default PaginationContainer;
