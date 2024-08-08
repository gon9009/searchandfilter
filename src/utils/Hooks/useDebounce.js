import { useEffect, useState } from "react";

// value -> 입력값
// delay -> 디바운스를 적용할 대기 시간
// delay 시간이 지나야지 debounceValue 상태를 업데이트 한다
// 이전의 타이머가 존재하면 ClearTimeout으로 타이머를 초기화 하고
// 새로운 타이머 설정

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 이전 타이머 정리 용도
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
export default useDebounce;
