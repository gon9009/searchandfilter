import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../Hooks/useFetchEmoji";
import useClipBoard from "../../Hooks/useClipBoard";
import useDebounce from "../../Hooks/useDebounce";
import Loading from "../Common/Loading";
import { useState, useEffect } from "react";
import "./Main.scss";

const LIMIT = 30;
const DELAY = 300;

function Main({ search, setSearch }) {
  const [filteredData, setFilteredData] = useState([]);
  const { data, error, isLoading } = useFetchEmoji();
  const [page, setPage] = useState(1);
  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);

  // 데이터 필터링
  useEffect(() => {
    // 데이터 오류 방지
    if (data && data.length > 0) {
      if (debouncedSearch !== "") {
        const filtered = data.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
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
  }, [debouncedSearch, data, page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const hanldePrevPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류! </div>;
  }
  
  const totalPages = data ? Math.ceil(data.length / LIMIT) : 0;
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
