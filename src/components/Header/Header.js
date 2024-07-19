import React from "react";
import "./Header.scss";
import EmojiSearch from "../Emoji/EmojiSearch/EmojiSearch";
import { useNavigate } from "react-router";

// 로고 + 서칭 으로 이루어진 컴포넌트
// 로고 클릭시 메인 페이지 이동
function Header({ setSearch }) {
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
        <EmojiSearch setSearch={setSearch} />
      </div>
    </header>
  );
}

export default Header;
