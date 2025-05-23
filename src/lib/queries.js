import { useQuery } from "@tanstack/react-query";
import {
  getAllEmoji,
  getEmojisByGroup,
  getEmojiBySearch,
  getSidebarData,
} from "./api";

// 모든 이모지 데이터를 가져오는 훅
export const useGetAllEmoji = (options) => {
  // options 파라미터 추가
  return useQuery({
    queryKey: ["getAllEmoji"],
    queryFn: getAllEmoji,
    ...options,
  });
};

// 그룹별 이모지 데이터를 가져오는 훅
export const useGetEmojisByGroup = (group) => {
  return useQuery({
    queryKey: ["getEmojiByGroup", group],
    queryFn: () => getEmojisByGroup(group),
  });
};

// 이모지 검색 데이터를 가져오는 훅
export const useGetEmojiBySearch = (searchValue) => {
  return useQuery({
    queryKey: ["searchEmoji", searchValue],
    queryFn: () => getEmojiBySearch(searchValue),
    refetchOnWindowFocus: false, // ✅ 탭 복귀 시 refetch 방지
    // True 일때 실행
  });
};

// 사이드바 데이터를 가져오는 훅
export const useGetSidebarData = () => {
  return useQuery({
    queryKey: ["getSidebarData"],
    queryFn: getSidebarData,
  });
};
