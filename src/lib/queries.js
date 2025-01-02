import { useQuery } from "@tanstack/react-query";
import {
  getAllEmoji,
  getSidebarData,
  getEmojisByGroup,
  getEmojiBySearch,
} from "./api";

// 모든 이모지 데이터를 가져오는 훅
export const useGetAllEmoji = () => {
  return useQuery({
    queryKey: ["getAllEmoji"],
    queryFn: getAllEmoji,
  });
};

// 사이드바 데이터를 가져오는 훅
export const useGetSidebarData = () => {
  return useQuery({
    queryKey: ["getSidebarData"],
    queryFn: getSidebarData,
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
  });
};
