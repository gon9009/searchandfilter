import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { SearchIcon } from "../common/Icons";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

const Header = () => {
  const [query, setQuery] = useState("");
  const [setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const debounecedQuery = useDebounce(query, 500);

  useEffect(() => {
    // 검색어가 비었을 경우 쿼리 (search) 비우기
    if (!debounecedQuery.trim()) {
      if (location.pathname === "/search") {
        setSearchParams({}, { replace: true });
      }
      return;
    }

    // 디바운싱 성공후
    if (location.pathname !== "/search") {
      navigate(`/search?search=${encodeURIComponent(debounecedQuery)}`);
    } else {
      setSearchParams({ search: debounecedQuery }, { replace: true });
    }
  }, [debounecedQuery, navigate, location.pathname, setSearchParams]);

  // 핸들러
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/" className="heaer__logo" aria-label="home">
          <img src={logo} alt="logo" />
        </Link>
        <div className="header__search__wrapper">
          <input
            placeholder="이모지를 검색하세요 !"
            className="header__search"
            type="search"
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
