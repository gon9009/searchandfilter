import { useSearchParams } from "react-router-dom";

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
