import React from "react";
import "./EmojiTextArea.scss";

// 복사 완료되면 영역에 복사 붙혀넣기
function EmojiTextArea({ copiedEmoji, setCopiedEmoji }) {

  const handleChange = (event) => {
    setCopiedEmoji(event.target.value);
  };
  
  return (
    <section className="text-area-container">
      <textarea onChange={handleChange} value={copiedEmoji} />
    </section>
  );
}

export default EmojiTextArea;
