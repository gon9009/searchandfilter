import React from "react";
import { PaginationArrowLeft, PaginationArrowRight } from "../common/Icons";

const Pagination = () => {
  return (
    <div class="pagination">
      <button class="btn btn-prev">
        <PaginationArrowLeft />
      </button>
      <div class="pagination-info">
        <span class="pagination-info__current">1</span>
        <span class="pagination-info__separator">/</span>
        <span class="pagination-info__total">100</span>
      </div>
      <button class="btn btn-next">
        <PaginationArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
