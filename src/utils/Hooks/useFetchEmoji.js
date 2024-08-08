// React - Query 로 데이터 패칭 처리
import { useQuery } from "@tanstack/react-query";
import { getEmoji } from "../API/api";
import Loading from "../components/Common/Loading";

function useFetchEmoji() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["emojis"],
    queryFn: () => getEmoji(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>데이터 패칭 오류!</div>;
  }

  return { data, error, isLoading };
}

export default useFetchEmoji;
