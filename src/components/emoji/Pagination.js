import React from "react";
import { PaginationArrowLeft, PaginationArrowRight } from "../common/Icons";
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ itemCount, currentPage, handlePageChange }) => {
  const { totalPage, hasNext, hasPrev } = usePagination(itemCount);

  // hasPrev 가 F 가 되어야 disabled 가 T 가 되고
  // hasNext 가 F 가 되어야 disabled 가 T 가 되고
  return (
    <div className="pagination">
      <button
        disabled={!hasPrev}
        onClick={handlePageChange}
        className="btn btn-prev"
      >
        <PaginationArrowLeft />
      </button>
      <div className="pagination-info">
        <span className="pagination-info__current">{currentPage}</span>
        <span className="pagination-info__separator">/</span>
        <span className="pagination-info__total">{totalPage}</span>
      </div>
      <button
        disabled={!hasNext}
        onClick={handlePageChange}
        className="btn btn-next"
      >
        <PaginationArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
