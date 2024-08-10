import React from "react";
import "./EmojiTextArea.scss";
import { useStore } from "../../../store/useStore";

// 상태 표시 역할 UI 담당 (리팩토링)
function EmojiTextArea() {
  const { copiedEmojis } = useStore((state) => ({
    copiedEmojis: state.copiedEmojis,
  }));

  return (
    <section className="text-area-container">
      <textarea value={copiedEmojis.join(" ")} readOnly />
    </section>
  );
}

export default EmojiTextArea;
