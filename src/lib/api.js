const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

// 모든 이모지를 가져오는 함수
export async function getAllEmoji() {
  const response = await fetch(`${BASE_URL}/emojis?access_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}

// 사이드바 구조 데이터를 가져오는 함수
export async function getSidebarData() {
  const response = await fetch(`${BASE_URL}/categories?access_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}

// 사이드바 그룹별 데이터를 가져오는 함수
export async function getEmojisByGroup(group) {
  const response = await fetch(
    `${BASE_URL}/categories/${group}?access_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}

// 이모지를 검색하는 함수
export async function getEmojiBySearch(query) {
  const response = await fetch(
    `${BASE_URL}/emojis?search=${query}&access_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}
