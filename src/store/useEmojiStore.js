import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useEmojiStore = create(
  persist(
    (set, get) => ({
      likedEmojis: [],
      toggleLike: (codePoint) => {
        const current = get().likedEmojis;
        const next = current.includes(codePoint)
          ? current.filter((id) => id !== codePoint)
          : [...current, codePoint];
        set({ likedEmojis: next });
      },
    }),
    {
      name: "likedEmojis", // localStorage key 자동 설정됨
    }
  )
);
