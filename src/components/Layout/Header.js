import React from "react";
import logo from "../../assets/logo.png";
import { SearchIcon } from "../common/Icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="/">
          <img src={logo} alt="logo" />
        </a>
        {/* 인풋과 서치 아이콘을 하나의 래퍼로 감싸고 포지션닝 사용 */}
        <div className="header__search__wrapper">
          <input
            placeholder="이모지를 검색하세요 !"
            className="header__search"
            type="search"
          />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
