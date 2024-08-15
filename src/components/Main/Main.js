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
  const { likedEmojis, search, addCopiedEmoji } = useStore((state) => ({
    likedEmojis: state.likedEmojis,
    search: state.search,
    addCopiedEmoji: state.addCopiedEmoji,
  }));
  const [filteredData, setFilteredData] = useState([]); // 필터링 된 데이터
  const [page, setPage] = useState(1); // 페이지 상태로 관리
  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();

  // 사이드바 필터링
  useEffect(() => {
    if (data && data.length > 0) {
      let filtered = data;
      if (categoryName) {
        // 1.좋아요 카테고리 클릭시
        if (categoryName === "liked") {
          filtered = likedEmojis;
        } else {
          // 2.나머지 카테고리 클릭시
          filtered = filtered.filter(
            (emoji) =>
              emoji.category.toLowerCase() === categoryName.toLowerCase()
          );
        }
      }
      setFilteredData(filtered);
    }
  }, [data, categoryName, likedEmojis]);

  // 검색 필터링
  useEffect(() => {
    if (data && data.length > 0) {
      if (debouncedSearch) {
        let searchedData = data;
        searchedData = searchedData.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
        setFilteredData(searchedData);
      } else {
        setFilteredData(data);
      }
    }
  }, [debouncedSearch, data]);

  // 페이지 1번 초기화
  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  // 첫번째 데이터 인덱스 넘버
  // EX) 1 페이지 => 0번부터 29번 , 2 페이지 => 30번 부터 59 까지
  const start = (page - 1) * LIMIT;

  //페이지당 30개의 데이터를 주기 위해
  const paginatedData = filteredData.slice(start, start + LIMIT);
  const totalPages = Math.ceil(filteredData.length / LIMIT);

  // 클립보드+상태 배열에 저장
  const handleCopyToClipboard = (emojiString) => {
    copyToClipboard(emojiString);
    addCopiedEmoji(emojiString);
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
        handleCopyToClipboard={handleCopyToClipboard}
        isLoading={isLoading}
        categoryName={categoryName}
      />
    </>
  );
}

export default Main;
