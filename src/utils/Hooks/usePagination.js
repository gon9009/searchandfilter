import { useEffect, useState } from "react";

function usePagination(filteredData, initialPage, limit) {
  // 현재 페이지와 총 페이지(totalPages)
  const [page, setPage] = useState(initialPage);
  const totalPages = Math.ceil(filteredData.length / limit);
  // 현재 페이지에 맞는 시작 데이터 범위를 결정 
  const start = (page - 1) * limit;
  // 필터링 된 데이터를 기준으로 Start 부터
  const paginatedData = filteredData.slice(start, start + limit);

  useEffect(() => {
    setPage(1); // 페이지 초기화
  }, [filteredData]);

  return { page, setPage, totalPages, paginatedData };
}

export default usePagination;
