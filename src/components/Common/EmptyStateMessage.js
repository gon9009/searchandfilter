import React from "react";
import { FiAlertCircle } from "react-icons/fi";

// 검색결과가 비어있거나 , 좋아요한 이모지가 없을때 예외 처리 렌더링 

function EmptyStateMessage({ type }) {
  return (
    <>
      <FiAlertCircle />
      {type === "noLiked" && (
        <p className="empty-state">좋아요한 이모지가 없습니다.</p>
      )}
      {type === "noSearch" && (
        <p className="empty-state">이모지를 찾을수 없습니다.</p>
      )}
    </>
  );
}

export default EmptyStateMessage;
