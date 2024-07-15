import React from "react";
import "./EmojiTextArea.scss";

function EmojiTextArea() {
  return (
    <section className="text-area-container">
      <textarea placeholder="이모지를 복사하세요!" />
    </section>
  );
}

export default EmojiTextArea;
