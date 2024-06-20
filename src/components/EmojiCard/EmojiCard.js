import React from "react";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import { decode } from "html-entities";

function EmojiCard() {
  const { data, error, isLoading } = useFetchEmoji();

  if (isLoading) {
    return <h2>로딩 중...</h2>;
  }

  if (error) {
    return <h2>에러 발생!</h2>;
  }

  return (
    <>
      <h2>EMOJI</h2>
      <section className="emoji-container">
        {data.map((emoji) => {
          const { name, category, group, htmlCode } = emoji;
          const emojiString = decode(htmlCode[0]);
          return (
            <div key={name}>
              <h3>{name}</h3>
              <div style={{ fontSize: "2rem" }}>{emojiString}</div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default EmojiCard;
