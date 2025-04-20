import React, { useMemo } from "react";
import EmojiCardList from "../components/emoji/EmojiCardList";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useGetAllEmoji } from "../lib/queries";
import Pagination from "../components/emoji/Pagination";
import { useCurrentPage } from "../hooks/useCurrentPage";

function Home() {
  const { data: allEmojis, isLoading, error } = useGetAllEmoji();
  const { currentPage, handlePageChange } = useCurrentPage();
  // 50개씩 분할된 데이터들
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 50;
    return allEmojis.slice(start, start + 50);
  }, [currentPage, allEmojis]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }

  return (
    <>
      <EmojiCardList emojis={paginatedData} />
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        itemCount={allEmojis.length}
      />
    </>
  );
}

export default Home;
