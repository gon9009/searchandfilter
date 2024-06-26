import React from "react";
import "./Header.scss";
import EmojiSearch from "../Emoji/EmojiSearch/EmojiSearch";

function Header({setSearch}) {
  return (
    <header>
      <div className="header-container">
        <h2 className="title">EmojiFinder</h2>
        <EmojiSearch setSearch={setSearch} />
      </div>
    </header>
  );
}

export default Header;
