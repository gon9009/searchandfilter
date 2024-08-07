import React from "react";
import "./Header.scss";
import EmojiSearch from "../Emoji/EmojiSearch/EmojiSearch";
import { useNavigate } from "react-router";

function Header() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
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
