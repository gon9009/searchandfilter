import React from "react";
import "./Header.scss";
import EmojiSearch from "../Emoji/EmojiSearch/EmojiSearch";
import { useNavigate } from "react-router";

function Header() {
  // 상태 공유
  const navigate = useNavigate();

  // 모든데이터 + 1페이지 
  const handleClick = () => {
    navigate("/");
    // set
  };
  
  return (
    <header>
      <div className="header-container">
        <h2 className="title" onClick={handleClick}>
          Emoji 
          <p>Hub</p>
        </h2>
        <EmojiSearch  />
      </div>
    </header>
  );
}

export default Header;
