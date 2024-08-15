import React from "react";
import EmojiContainer from "../Emoji/EmojiContainer/EmojiContainer";
import useFetchEmoji from "../../utils/Hooks/useFetchEmoji";
import useClipBoard from "../../utils/Hooks/useClipBoard";
import useDebounce from "../../utils/Hooks/useDebounce";
import usePagination from "../../utils/Hooks/usePagination";
import useFilteredData from "../../utils/Hooks/useFilteredData";
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
  const { copyToClipboard } = useClipBoard();
  const debouncedSearch = useDebounce(search, DELAY);
  const { categoryName } = useParams();

  // 데이터 필터링 , 페이지 네이션
  const filteredData = useFilteredData(data, categoryName, debouncedSearch, likedEmojis);
  const { page, setPage, totalPages, paginatedData } = usePagination(filteredData, 1, LIMIT);

  // 클립보드 및 상태 배열에 저장
  const handleCopyToClipboard = (emojiString) => {
    copyToClipboard(emojiString);
    addCopiedEmoji(emojiString);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류! {error.message}</div>;
  }

  return (
    <EmojiContainer
      page={page}
      setPage={setPage}
      totalPages={totalPages}
      filteredData={paginatedData}
      handleCopyToClipboard={handleCopyToClipboard}
      isLoading={isLoading}
      categoryName={categoryName}
    />
  );
}

export default Main;
