import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://emojihub.yurace.pro/api/all";

function useFetchEmoji() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["emojis"],
    queryFn: () => axios.get(API_URL).then((res) => res.data),
  });

  return { data, error, isLoading };
}

export default useFetchEmoji;
