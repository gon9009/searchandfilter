import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import { useState, useEffect } from "react";
import "./Main.scss";

const LIMIT = 20;

function Main() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();
  const [page, setPage] = useState(1);

  // 검색/필터랑
  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((emoji) => {
          return emoji.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, data]);


  useEffect(() => {

  },[])

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
