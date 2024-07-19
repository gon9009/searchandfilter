// 이모지 클릭시 복사
 function useClipBoard() {
  const copyToClipboard = (emoji) => {
    window.navigator.clipboard.writeText(emoji);
  };

  return { copyToClipboard };
}

export default useClipBoard

