import React from "react";
import "./Header.scss";
import EmojiSearch from "../Emoji/EmojiSearch/EmojiSearch";

// 로고 + 서칭 으로 이루어진 컴포넌트
function Header({ setSearch }) {
  return (
    <header>
      <div className="header-container">
        <h2 className="title">
          Emoji
          <p>Hub</p>
        </h2>
        <EmojiSearch setSearch={setSearch} />
      </div>
    </header>
  );
}

export default Header;
