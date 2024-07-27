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
  const [filteredData, setFilteredData] = useState([]); // 필터링 된 데이터
  const [copiedEmoji, setCopiedEmoji] = useState([]); // textarea 복사된 이모지 저장 상태
  const [paginatedData, setPaginatedData] = useState([]); // 페이지별 30개의 이모지 데이터 저장
  const [page, setPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();
  const { data, error, isLoading } = useFetchEmoji();

  // 사이드바/서칭 필터링
  useEffect(() => {
    if (data && data.length > 0) {
      let filtered = data;
      // 사이드바 필터링
      if (categoryName) {
        if (categoryName === "liked") {
          filtered = likedEmojis; // Liked 카테고리일 경우 likedEmojis로 필터링
        } else {
          filtered = filtered.filter(
            (emoji) =>
              emoji.category.toLowerCase() === categoryName.toLowerCase()
          );
        }
      }
      // 서칭 필터링
      if (debouncedSearch !== "") {
        filtered = filtered.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
      }

      setFilteredData(filtered);
    }
  }, [debouncedSearch, data, categoryName, likedEmojis]);

  // 페이지당 30개씩 분할하기 
  useEffect(() => {
    const start = (page - 1) * LIMIT;
    const paginated = filteredData.slice(start, start + LIMIT);
    setPaginatedData(paginated);
  }, [filteredData, page]);

  // 총 페이지 수 구하기 
  useEffect(() => {
    setTotalPages(Math.ceil(filteredData.length / LIMIT));
  }, [filteredData]);

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류!</div>;
  }

  const handleCopyToClipboard = (emojiString) => {
    copyToClipboard(emojiString);
    setCopiedEmoji([...copiedEmoji, emojiString]);
  };

  return (
    <>
      <EmojiContainer
        setPage={setPage}
        page={page}
        totalPages={totalPages}
        setSearch={setSearch}
        filteredData={paginatedData}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        copyToClipboard={copyToClipboard}
        likedEmojis={likedEmojis}
        setLikedEmojis={setLikedEmojis}
        copiedEmoji={copiedEmoji}
        setCopiedEmoji={setCopiedEmoji}
        handleCopyToClipboard={handleCopyToClipboard}
        isLoading={isLoading}
        categoryName={categoryName}
      />
    </>
  );
}

export default Main;
