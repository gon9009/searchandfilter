import React from "react";
import "./EmojiTextArea.scss";
import { useStore } from "../../../store/useStore";

function EmojiTextArea() {
  const { copiedEmojis } = useStore((state) => ({
    copiedEmojis: state.copiedEmojis,
  }));

  return (
    <section className="text-area-container">
      <textarea value={copiedEmojis.join(" ")} />
    </section>
  );
}

export default EmojiTextArea;
