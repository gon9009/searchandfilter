import create from "zustand";

export const useStore = create((set) => ({
  search: "",
  likedEmojis: [],
  setSearch: (search) => set({ search }),
  toggleLikeEmoji: (emoji, isLiked) =>
    set((state) => {
      const likedEmojisUpdate = isLiked
        ? state.likedEmojis.filter((e) => e.name !== emoji.name)
        : [...state.likedEmojis, emoji];
      return { likedEmojis: likedEmojisUpdate };
    }),
}));
