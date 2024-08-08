import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../utils/Hooks/useFetchEmoji";
import useClipBoard from "../../utils/Hooks/useClipBoard";
import useDebounce from "../../utils/Hooks/useDebounce";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useStore } from "../../store/useStore";
import "./Main.scss";
import Loading from "../Common/Loading";

const LIMIT = 30;
const DELAY = 300;

function Main() {
  const { data, isLoading, error } = useFetchEmoji();
  const { likedEmojis, search } = useStore((state) => ({
    likedEmojis: state.likedEmojis,
    search: state.search,
  }));
  const [filteredData, setFilteredData] = useState([]); // 필터링 된 데이터
  const [page, setPage] = useState(1); // 현재 페이지
  const [copiedEmoji, setCopiedEmoji] = useState([]); // textarea 복사된 이모지 저장 상태
  // ===================================================================================
  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();

  // 사이드바/서칭 필터링
  useEffect(() => {
    if (data && data.length > 0) {
      let filtered = data;
      if (categoryName) {
        if (categoryName === "liked") {
          filtered = likedEmojis;
        } else {
          filtered = filtered.filter(
            (emoji) =>
              emoji.category.toLowerCase() === categoryName.toLowerCase()
          );
        }
      }
      if (debouncedSearch !== "") {
        filtered = filtered.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
      }
      setFilteredData(filtered);
    }
  }, [debouncedSearch, data, categoryName, likedEmojis]);

  const start = (page - 1) * LIMIT;
  const paginatedData = filteredData.slice(start, start + LIMIT);
  const totalPages = Math.ceil(filteredData.length / LIMIT);

  // 1. 클립보드에 저장 + 2.CopiedEmoji 배열에 저장
  const handleCopyToClipboard = (emojiString) => {
    copyToClipboard(emojiString);
    setCopiedEmoji([...copiedEmoji, emojiString]);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류!{error.message}</div>;
  }

  return (
    <>
      <EmojiContainer
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        filteredData={paginatedData}
        copyToClipboard={copyToClipboard}
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
