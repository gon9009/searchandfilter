import React from "react";
import EmojiCardList from "../components/emoji/EmojiCardList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useGetAllEmoji } from "../lib/queries";

// 데이터 슬라이싱 적용시키기
function Home() {
  // Selet: 이미 패칭된 데이터(서버로부터 받아온 데이터)를 클라이언트에서 가공하는 기능
  // 전체 데이터를 서버에서 먼저 가져옴 (예: 1500개)
  // React Query 캐시에 전체 데이터 저장
  // 그 다음에 select 함수가 50개로 잘라서 반환
  const {
    data: slicedEmojis,
    isLoading,
    error,
  } = useGetAllEmoji({
    select: (data) => {
      console.log("전체 데이터 길이:", data?.length); // 데이터 확인용
      return data?.slice(0, 50); // 캐시된 데이터 변환
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }

  console.log("잘린 데이터 길이:", slicedEmojis?.length); // 데이터 확인용

  return <EmojiCardList emojis={slicedEmojis} />;
}

export default Home;
