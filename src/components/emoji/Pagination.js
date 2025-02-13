import React from "react";
import { PaginationArrowLeft, PaginationArrowRight } from "../common/Icons";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="btn btn-prev">
        <PaginationArrowLeft />
      </button>
      <div className="pagination-info">
        <span className="pagination-info__current">1</span>
        <span className="pagination-info__separator">/</span>
        <span className="pagination-info__total">100</span>
      </div>
      <button className="btn btn-next">
        <PaginationArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
