// React - Query 로 데이터 패칭 처리
import { useQuery } from "@tanstack/react-query";
import { getEmoji } from "../API/api";
function useFetchEmoji() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["emojis"],
    queryFn: () => getEmoji(),
  });

  return { data, error, isLoading };
}

export default useFetchEmoji;
