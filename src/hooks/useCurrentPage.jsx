import { useSearchParams } from "react-router-dom";

// URL 쿼리스트링 기반으로 현재 페이지 번호를 관리하고 
// 페이지 이동을 제어하기 위해 
// 페이지네이션 상태를 로컬로 관리하면 날라간다 
export const useCurrentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // 쿼리스트링을 읽어온다 page 가 null 이면 1 반환
  // 문자열 -> 정수로 변환 (페ㅣ지 번호를 위해해)
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page) => {
    if (page === 1) {
      searchParams.delete("page");
    } else {
      // 내부값만 바꾸면반응 X ,
      searchParams.set("page", page.toString());
    }
    setSearchParams(searchParams);
  };

  return {
    currentPage,
    handlePageChange,
  };
};

// URL 쿼리스트링(page=x)을 통해 페이지네이션 상태를 관리하는 전용 훅 