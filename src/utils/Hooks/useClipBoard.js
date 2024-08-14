// 이모지 클릭시 복사 (함수 반환 )
 function useClipBoard() {
  const copyToClipboard = (emoji) => {
    window.navigator.clipboard.writeText(emoji);
  };
  return { copyToClipboard };
}

export default useClipBoard
