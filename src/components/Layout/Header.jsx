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
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (location.pathname !== "/search") {
      setQuery("");
    }
  }, [location.pathname]);

  useEffect(() => {
    const trimmedQuery = debouncedQuery.trim();
    
    // 현재 URL의 검색어와 비교하여, 변경이 없으면 아무것도 하지 않음 (불필요한 동작 방지)
    const currentSearch = searchParams.get('search');
    if (trimmedQuery === currentSearch) {
      return;
    }

    // 검색어가 비어있을 경우, 모든 쿼리 파라미터를 지웁니다.
    if (!trimmedQuery) {
      if (location.pathname === "/search") {
        setSearchParams({}, { replace: true });
      }
      return;
    }

    // 현재 페이지가 /search가 아닐 때 검색하면, search 페이지로 이동합니다.
    if (location.pathname !== "/search") {
      navigate(`/search?search=${encodeURIComponent(trimmedQuery)}`);
    } else {
      // /search 페이지에서 새로운 검색을 하면,
      // page 파라미터는 삭제하고(1페이지로 리셋) search 파라미터만 새로 설정합니다.
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set("search", trimmedQuery);
      newSearchParams.delete("page");
      setSearchParams(newSearchParams, { replace: true });
    }
  }, [debouncedQuery, location.pathname, navigate, searchParams, setSearchParams]);

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
