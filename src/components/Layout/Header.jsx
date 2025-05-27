import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { SearchIcon } from "../common/Icons";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { MobileMenuIcon } from "../common/Icons";

const Header = ({ onMenuClick }) => {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location.pathname]);

  useEffect(() => {
    // 검색어가 비어있을 경우 , 쿼리스트링 비우기
    if (!debouncedQuery.trim()) {
      if (location.pathname === "/search") {
        setSearchParams({}, { replace: true });
      }
      return;
    }

    // debouncedQuery 가 변경 -> 페이지 이동
    if (location.pathname !== "/search") {
      navigate(`/search?search=${encodeURIComponent(debouncedQuery)}`);
    } else {
      setSearchParams({ search: debouncedQuery }, { replace: true });
    }
  }, [debouncedQuery, location.pathname, setSearchParams, navigate]);

  // 로고 클리시 쿼리도 초기화
  const handleLogo = () => {
    setQuery("");
  };

  // 핸들러
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <button
          className="header__menu-button"
          onClick={onMenuClick}
          aria-label="menu"
        >
          <MobileMenuIcon />
        </button>
        <Link
          to="/"
          onClick={handleLogo}
          className="header__logo"
          aria-label="home"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__search__wrapper">
          <input
            placeholder="이모지를 검색하세요 !"
            className="header__search"
            type="text"
            onChange={handleSearch}
            value={query}
          />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
