// direction 사용자 정의 속성 활용
// 페이지 이동 버튼
import React from "react";
import "./PageButton.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function PageButton({ direction, handleClick, isFirstPage, isLastPage }) {
  return (
    <button
      className="btn btn-pagination"
      disabled={direction === "prev" ? isFirstPage : isLastPage}
      onClick={handleClick}
    >
      {direction === "prev" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  );
}

export default PageButton;
