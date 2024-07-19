import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import useClipBoard from "../../Hooks/useClipBoard";
import useDebounce from "../../Hooks/useDebounce";
import Loading from "../Common/Loading";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./Main.scss";

const LIMIT = 30;
const DELAY = 300;

function Main({ search, setSearch, likedEmojis, setLikedEmojis }) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [totalFilteredPages, setTotalFilteredPages] = useState(1); // 필터링된 데이터 페이지 수
  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();

  useEffect(() => {
    if (data && data.length > 0) {
      let filtered = data;

      if (categoryName) {
        filtered = filtered.filter((emoji) =>
          emoji.category.toLowerCase() === categoryName.toLowerCase()
        );
      }

      if (debouncedSearch !== "") {
        filtered = filtered.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
      }

      const start = (page - 1) * LIMIT;
      const paginatedData = filtered.slice(start, start + LIMIT);
      setFilteredData(paginatedData);

      // 필터링된 데이터 기준 페이지 수 계산
      setTotalFilteredPages(Math.ceil(filtered.length / LIMIT));
    }
  }, [debouncedSearch, data, page, categoryName]);

  useEffect(() => {
    // 전체 데이터 기준 페이지 수 계산
    setTotalPages(data ? Math.ceil(data.length / LIMIT) : 1);
  }, [data]);

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalFilteredPages));
  };

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류!</div>;
  }

  return (
    <>
      <EmojiContainer
        setPage={setPage}
        page={page}
        totalPages={totalFilteredPages} // 필터링된 데이터 기준 페이지 수
        setSearch={setSearch}
        filteredData={filteredData}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        copyToClipboard={copyToClipboard}
        likedEmojis={likedEmojis}
        setLikedEmojis={setLikedEmojis}
      />
    </>
  );
}

export default Main;
