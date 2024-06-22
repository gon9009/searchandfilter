import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmojiList from "../EmojiList/EmojiList";
import "./Main.scss";
import EmojiSearch from "../EmojiSearch/EmojiSearch";

function Main() {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="emoji-section">
        <EmojiSearch />
        <EmojiList />
      </div>
    </main>
  );
}

export default Main;
