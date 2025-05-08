import { useParams } from "react-router-dom";
import { useGetEmojisByGroup } from "../lib/queries";
import EmojiPageLayout from "../components/Layout/EmojiPageLayout";
import LoadingSpinner from "../components/common/LoadingSpinner";

const Group = () => {
  const { slug } = useParams();
  // ✅ 핵심 해결책: slug 값이 유효한지 체크
  // slug 값이 아직 없거나 (undefined) 빈 객체 {} 에서 추출된 경우 패칭 훅을 호출하지 않음

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
