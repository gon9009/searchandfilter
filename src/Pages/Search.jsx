import React from "react";
import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import { useGetEmojiBySearch } from "../lib/queries";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

// 검색 페이지
const Search = () => {
  const [searchParams] = useSearchParams();
  // 디바운싱 값 (쿼리스트링) 추출하기
  const searchTerm = searchParams.get("search") || "";

  // 디바운싱이 완료된 값을 패칭 하기
  const {
    data :searchedEmojis = [],
    isLoading,
    error,
  } = useGetEmojiBySearch(searchTerm);

  // 검색어가 비어있을때 화면 
  if (!searchTerm.trim()) {
    return <div>검색어를 입력해주세요</div>;
  }

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <>
      <EmojiPageLayout data={searchedEmojis} isLoading={isLoading} />
    </>
  );
};

export default Search;
