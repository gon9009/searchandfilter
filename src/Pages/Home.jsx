import { useGetAllEmoji } from "../lib/queries";
import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Home = () => {
  const { data: allEmojis = [], isLoading, error } = useGetAllEmoji();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return <EmojiPageLayout data={allEmojis} isLoading={isLoading} />;
};

export default Home;
