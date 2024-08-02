import React from "react";
import { FiAlertCircle } from "react-icons/fi";

// Props 로 빈 상태 메시지 타입을 결정하자 !!
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
