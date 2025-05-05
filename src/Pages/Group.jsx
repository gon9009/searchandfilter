import { useParams } from "react-router-dom";
import { useGetEmojisByGroup } from "../lib/queries";
import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Group = () => {
  const { slug } = useParams();
  const {
    data: groupEmojis = [],
    isLoading,
    error,
  } = useGetEmojisByGroup(slug);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return <EmojiPageLayout data={groupEmojis} isLoading={isLoading} />;
};

export default Group;
