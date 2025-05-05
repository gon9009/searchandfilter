import { create } from "zustand";

// 클립보드 
export const useClipboardStore = create((set, get) => ({
  copiedText: "",
  // 이모지를 누적 추가하기
  appendEmoji: (emoji) => {
    const prev = get().copiedText;
    set({ copiedText: prev + emoji });
  },
  // 텍스트 초기화
  clearText: () => {
    set({ copiedText: "" });
  },
}));

// create(() => ({...})) 객체형태로 반환 
// 콜백함수로 어떤 로직을 "나중에 실행하겠다" 등록하는 함수 