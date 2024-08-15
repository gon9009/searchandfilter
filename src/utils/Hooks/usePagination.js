import { useEffect, useState } from "react";

function usePagination(filteredData, initialPage, limit) {
  const [page, setPage] = useState(initialPage);
  const totalPages = Math.ceil(filteredData.length / limit);
  const start = (page - 1) * limit;
  const paginatedData = filteredData.slice(start, start + limit);

  useEffect(() => {
    setPage(1); // 페이지 초기화
  }, [filteredData]);

  return { page, setPage, totalPages, paginatedData };
}

export default usePagination;
