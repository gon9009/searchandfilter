import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import EmojiList from "../EmojiList/EmojiList";
import EmojiSearch from "../EmojiSearch/EmojiSearch";
import "./Main.scss";
import { useState, useEffect } from "react";

// 패칭된 데이터 필터링
// EmojiSearch에 서치 상태 전달
// EmojiList에 필터링된데이터 전달
function Main({ data, isLoading, error }) {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // 데이터 서칭 useEFfect로 관리
  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((emoji) => {
          return emoji.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, data]);

  if (isLoading) {
    return <h2>로딩중 . . . </h2>;
  }

  if (error) {
    return <h2>에러 발생!</h2>;
  }

  return (
    <main className="main-container">
      <Sidebar />
      <div className="emoji-section">
        <EmojiSearch setSearch={setSearch} />
        <EmojiList filteredData={filteredData} />
      </div>
    </main>
  );
}

export default Main;
