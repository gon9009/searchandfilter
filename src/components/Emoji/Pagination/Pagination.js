import React from "react";
import "./Pagination.scss";

function Pagination({ page, totalPages }) {
  return (
    <div className="pagination">
      {page}/{totalPages}
    </div>
  );
}

export default Pagination;
