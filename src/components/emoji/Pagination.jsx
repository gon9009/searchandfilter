import React from "react";
import { PaginationArrowLeft, PaginationArrowRight } from "../common/Icons";
import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ itemCount, currentPage, handlePageChange }) => {
  const { totalPage, hasNext, hasPrev } = usePagination(itemCount);

  // 마지막 페이지이면 disabled 시켜야한다 
  // 즉 hasNextPAge T -> disable T 
  // 다음페이지가 있어 ? -> 그럼 Disable F 
  // 다음페이지가 없어 ? -> 그럼 Disable T 
  return (
    <div className="pagination">
      <button
        disabled={!hasPrev}
        onClick={() => handlePageChange(currentPage - 1)}
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
        onClick={() => handlePageChange(currentPage + 1)}
        className="btn btn-next"
      >
        <PaginationArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
