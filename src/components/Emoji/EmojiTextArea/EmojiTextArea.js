import React from "react";
import "./EmojiTextArea.scss";
import { useStore } from "../../../store/useStore";

// 클릭후 , 복사된 이모지들이 있는 TextArea
function EmojiTextArea() {
  const { copiedEmojis, setCopiedEmojis } = useStore((state) => ({
    copiedEmojis: state.copiedEmojis,
    setCopiedEmojis: state.setCopiedEmojis,
  }));

  const handleChange = (e) => {
    const newEmojis = e.target.value.split(" "); // 공백으로 분리된 문자열을 배열로 변환
    setCopiedEmojis(newEmojis); // 상태 업데이트
  };

  return (
    <section className="text-area-container">
      <textarea onChange={handleChange} value={copiedEmojis.join(" ")} />
    </section>
  );
}

export default EmojiTextArea;
