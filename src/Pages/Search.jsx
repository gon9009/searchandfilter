import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import { useGetEmojiBySearch } from "../lib/queries";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// 검색 페이지
const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // 디바운싱 값 (쿼리스트링) 추출하기
  const searchTerm = searchParams.get("search") || "";

  const {
    data: searchedEmojis,
    isLoading,
    error,
  } = useGetEmojiBySearch(searchTerm);

  useEffect(() => {
    if (!searchTerm.trim()) {
      navigate("/");
    }
  }, [searchTerm, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>검색 결과가 없습니다</div>;
  }

  return (
    <>
      <EmojiPageLayout data={searchedEmojis} isLoading={isLoading} />
    </>
  );
};

export default Search;
