import { useCurrentPage } from "./useCurrentPage";

export const usePagination = ({ itemCount }) => {
  const { currentPage } = useCurrentPage();
  // 총 페이지 계산
  const totalPage = Math.ceil(itemCount / 50);

  return {
    totalPage,
    hasNext: currentPage > 1,
    hasPrev: currentPage < totalPage,
  };
};
