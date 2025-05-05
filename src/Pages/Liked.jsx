import { useGetAllEmoji } from "../lib/queries";
import { useEmojiStore } from "../store/useEmojiStore";
import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { useMemo } from "react";

const Liked = () => {
  const { data: allEmojis = [], isLoading, error } = useGetAllEmoji();
  const { likedEmojis } = useEmojiStore();

  // 로컬스토리지 저장된 좋아요 이모지들만 반환
  const filteredEmojis = useMemo(() => {
    return allEmojis.filter((emoji) => likedEmojis.includes(emoji.codePoint));
  }, [allEmojis, likedEmojis]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return <EmojiPageLayout data={filteredEmojis} isLoading={isLoading} />;
};

export default Liked;
