import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import useClipBoard from "../../Hooks/useClipBoard";
import { useState, useEffect } from "react";
import "./Main.scss";

const LIMIT = 30;

function Main({ search, setSearch }) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();
  const [page, setPage] = useState(1);
  const { copyToClipboard } = useClipBoard();

  // 데이터 필터링
  useEffect(() => {
    // 데이터 오류 방지
    if (data && data.length > 0) {
      if (search !== "") {
        const filtered = data.filter((emoji) =>
          emoji.name.toLowerCase().includes(search.toLowerCase())
        );
        const start = (page - 1) * LIMIT;
        const paginatedData = filtered.slice(start, start + LIMIT);
        setFilteredData(paginatedData);
      } else {
        const start = (page - 1) * LIMIT;
        const end = start + LIMIT;
        setFilteredData(data.slice(start, end));
      }
    }
  }, [search, data, page]);

  // 페이지네이션
  if (isLoading) return <h2>로딩중 . . . </h2>;
  if (error) return <h2>에러 발생!</h2>;

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const hanldePrevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  // 전체 페이지
  const totalPages = Math.ceil(data.length / LIMIT);

  return (
    <>
      <EmojiContainer
        setPage={setPage}
        page={page}
        totalPages={totalPages}
        setSearch={setSearch}
        filteredData={filteredData}
        handleNextPage={handleNextPage}
        handlePrevPage={hanldePrevPage}
        copyToClipboard={copyToClipboard}
      />
    </>
  );
}

export default Main;
