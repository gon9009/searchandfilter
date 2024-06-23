import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmojiList from "../EmojiList/EmojiList";
import "./Main.scss";
import EmojiSearch from "../EmojiSearch/EmojiSearch";

function Main({filteredData}) {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="emoji-section">
        <EmojiSearch  />
        <EmojiList filteredData={filteredData}/>
      </div>
    </main>
  );
}

export default Main;
