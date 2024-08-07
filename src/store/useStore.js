import create from "zustand";

export const useStore = create((set) => ({
  // 검색
  search: "",

  // 좋아요한 이모지들 모음
  likedEmojis: [],

  // 검색 상태를 업데이트 하는 함수
  setSearch: (search) => set({ search }),

  // 좋아요 이모지 상태를 업데이트 하는 함수
  setLikedEmojis: (likedEmojis) => set({ likedEmojis }),

  // 좋아요 상태를 토글하는 함수
  toggleLikeEmoji: (emoji, isLiked) =>
    set((state) => {
      const likedEmojisUpdate = isLiked
        ? state.likedEmojis.filter((e) => e.name !== emoji.name)
        : [...state.likedEmojis, emoji];
      return { likedEmojis: likedEmojisUpdate };
    }),
}));
