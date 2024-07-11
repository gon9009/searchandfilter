// 이모지 필터링용 버튼
import React from "react";
import "./EmojiFilter.scss";
import { FaHeart } from "react-icons/fa";
import { FcOk } from "react-icons/fc";

function EmojiFilter() {
  return (
    <div className="filter-button-container">
      <button>
        <FaHeart style={{ color: "red" }} />
        <p>좋아요한 이모지</p>
      </button>
      <button>
        <FcOk />
        <p>최근에 사용한 이모지</p>
      </button>
    </div>
  );
}

export default EmojiFilter;
