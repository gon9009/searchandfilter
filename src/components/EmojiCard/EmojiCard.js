import React from "react";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import { decode } from "html-entities";
import './EmojiCard.scss';

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
      {data.map((emoji) => {
        const { name, category, group, htmlCode } = emoji;
        const emojiString = decode(htmlCode[0]);
        return (
          <div className="emoji-background">
            <div key={name}>
              <div style={{ fontSize: "3rem" }}>{emojiString}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default EmojiCard;
