import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import { useState, useEffect } from "react";
import "./Main.scss";

// useFetchEmoji 훅으로 데이터 로드/오류처림 담당
// useState,useEffect 훅을 사용하여 검색어 상태/필터링된 데이터 상태 관리
// 데이터 로드후 filteredData를 하위 컴포넌트에 전달
function Main() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();

  // 검색 입력 관리
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
    <>
      <EmojiContainer setSearch={setSearch} filteredData={filteredData} />
    </>
  );
}

export default Main;
