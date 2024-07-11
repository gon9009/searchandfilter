import React from "react";
import "./Pagination.scss";

function Pagination({ page, totalPages }) {
  return (
    <section className="pagination">
      <div>
        {page}/{totalPages}
      </div>
    </section>
  );
}

export default Pagination;
