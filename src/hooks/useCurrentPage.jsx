import { useSearchParams } from "react-router-dom";

// URL 쿼리스트링 기반으로 현재 페이지 번호를 관리하고
// 페이지 이동을 제어하기 위해
// 페이지네이션 상태를 로컬로 관리하면 날라간다
export const useCurrentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page) => {
    if (page === 1) {
      searchParams.delete("page");
    } else {
      searchParams.set("page", page.toString());
    }
    setSearchParams(new URLSearchParams(searchParams));
  };
  return {
    currentPage,
    handlePageChange,
  };
};
