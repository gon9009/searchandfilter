import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmojiList from "../EmojiList/EmojiList";
import './Main.scss'

function Main() {
  return (
    <main className="main-container">
      <Sidebar />
      <EmojiList />

    </main>
  );
}

export default Main;
