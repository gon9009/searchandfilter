// 이모지 리스트 페이지 이동 버튼
import React from "react";
import "./EmojiPageButton.scss";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function EmojiPageButton({ handleNextPage, handlePrevPage }) {
  return (
    <div className="page-button-container">
      <button onClick={handlePrevPage}>
        <FaArrowLeft />
      </button>
      <button onClick={handleNextPage}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default EmojiPageButton;
