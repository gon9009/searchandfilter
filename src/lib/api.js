const API_KEY = process.env.REACT_APP_API_KEY;

// 1.모든 이모지를 가져오는 함수
export async function getAllEmoji() {
  const response = await fetch(
    `https://emoji-api.com/emojis?access_key=${API_KEY}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("이모지를 불러오지 못했습니다");
  }
  return response.json();
}

// 2.특정 이모지 검색 함수
export async function getEmojiBySearch(name) {
  const response = await fetch(
    `https://emoji-api.com/emojis?search=${name}&access_key=${API_KEY}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("이모지 검색에 실패했습니다");
  }
  return response.json();
}

// 3.카테고리별 이모지를 가져오는 함수
export async function getEmojisByGroup(group) {
  const response = await fetch(
    ` https://emoji-api.com/categories/${group}?access_key=${API_KEY}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("그룹 데이터를 가져오는 데 실패했습니다");
  }

  return response.json();
}

// 4.카테고리 데이터를 가져오는 함수
export async function getSidebarData() {
  const response = await fetch(
    `https://emoji-api.com/categories?access_key=${API_KEY}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("카테고리 데이터를 가져오는 데 실패했습니다");
  }

  return response.json();
}
