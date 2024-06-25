import { useQuery } from "@tanstack/react-query";
import { getEmoji } from "../API/api";


function useFetchEmoji(page = 1) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["emojis", page],
    queryFn: () => getEmoji(page)
   });

  return { data, error, isLoading };
}

export default useFetchEmoji;
