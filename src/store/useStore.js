import create from "zustand";

export const useStore = create((set) => ({
  // 검색어 상태
  search: "",
  // 좋아요한 이모지 상태 
  likedEmojis: [],
  // 새로운 값을 설정할 때 이전 상태를 참조할 필요가 없디 
  setSearch: (search) => set({ search }),

 // 좋아요(liked) 한 이모지 저장 
  toggleLikeEmoji: (emoji, isLiked) =>
    set((state) => {
      const likedEmojisUpdate = isLiked
        ? state.likedEmojis.filter((e) => e.name !== emoji.name)
        : [...state.likedEmojis, emoji];
      return { likedEmojis: likedEmojisUpdate };
    }),
  // 복사한 이모지
  copiedEmojis: [],

  // 복사한 이모지 배열로 저장 
  addCopiedEmoji: (emoji) =>
    set((state) => ({
      copiedEmojis: [...state.copiedEmojis, emoji],
    })),
}));
