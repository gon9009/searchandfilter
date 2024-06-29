import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import { useState, useEffect } from "react";
import "./Main.scss";

const LIMIT = 30;

function Main() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();
  const [page, setPage] = useState(1);

  // 이모지 검색
  useEffect(() => {
    if (data) {
      const start = (page - 1) * LIMIT;
      const end = start + LIMIT;
      const paginatedData = data.slice(start, end);
      setFilteredData(
        paginatedData.filter((emoji) => {
          return emoji.name.toLowerCase().includes(search.toLowerCase());
        })
      );
    }
  }, [search, data, page]);

  if (isLoading) {
    return <h2>로딩중 . . . </h2>;
  }

  if (error) {
    return <h2>에러 발생!</h2>;
  }

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const hanldePrevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };
  return (
    <>
      <EmojiContainer
        setPage={setPage}
        setSearch={setSearch}
        filteredData={filteredData}
        handleNextPage={handleNextPage}
        handlePrevPage={hanldePrevPage}
      />
    </>
  );
}

export default Main;
