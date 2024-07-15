// 이모지 리스트 페이지 이동 버튼
// direction 사용자 정의 속성 활용
import React from "react";
import "./PageButton.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function PageButton({ direction, handleClick, page, totalPages }) {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  return (
    <button
      className="btn-pagination"
      disabled={direction === "prev" ? isFirstPage : isLastPage}
      onClick={handleClick}
    >
      {direction === "prev" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export default PageButton;
