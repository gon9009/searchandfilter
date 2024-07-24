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
  const [copiedEmoji, setCopiedEmoji] = useState([]); // 복사된 이모지 저장 상태
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [totalFilteredPages, setTotalFilteredPages] = useState(1); // 필터링된 데이터 페이지 수

  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();
  const { data, error, isLoading } = useFetchEmoji();

  // 1. 데이터 필터링과 페이징
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
      // 현재 페이지에서 데이터를 가져오기 시작할 인덱스 계산
      const start = (page - 1) * LIMIT;
      const paginatedData = filtered.slice(start, start + LIMIT);

      // "현재 페이지"에 해당하는 데이터만 포함 하는 배열
      setFilteredData(paginatedData);

      // 필터링된 데이터 기준 페이지 수 계산
      setTotalFilteredPages(Math.ceil(filtered.length / LIMIT));
    }
  }, [debouncedSearch, data, page, categoryName, likedEmojis]);

  // 2. 전체 데이터의 총 페이지 수
  useEffect(() => {
    // 전체 데이터 기준 페이지 수 계산
    setTotalPages(data ? Math.ceil(data.length / LIMIT) : 1);
  }, [data]);

  // 좋아요한 이모지 상태 관리
  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalFilteredPages));
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

  // 1.클립 보드에 복사 2.카피 상태로 저장
  const handleCopyToClipboard = (emojiString) => {
    copyToClipboard(emojiString);
    setCopiedEmoji([...copiedEmoji, emojiString]);
  };

  return (
    <>
      <EmojiContainer
        setPage={setPage}
        page={page}
        totalPages={totalFilteredPages}
        setSearch={setSearch}
        filteredData={filteredData}
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
