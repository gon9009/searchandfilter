const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// 1.모든 이모지를 가져오는 함수
export async function getAllEmoji() {
  const response = await fetch(`${BASE_URL}/emoji`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY, // API 키를 헤더에 포함
    },
  });

  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}

// 2.특정 이모지 검색 함수
export async function getEmojiBySearch(name) {
  const response = await fetch(`${BASE_URL}/emoji?name=${name}`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY, // API 키를 헤더에 포함
    },
  });

  if (!response.ok) {
    throw new Error("이모지 검색에 실패했습니다");
  }
  return response.json();
}

// 3.그룹별 이모지를 가져오는 함수
export async function getEmojisByGroup(group) {
  const response = await fetch(`${BASE_URL}?group=${group}`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("그룹 데이터를 가져오는 데 실패했습니다");
  }

  return response.json();
}
