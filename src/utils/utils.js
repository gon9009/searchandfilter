// utils/format.js
export const formatTitle = (title) => {
  return title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const paginateData = (currentPage, data, pageSize = 50) => {
  if (!Array.isArray(data)) return []; // ✅ null, undefined 방어
  const start = (currentPage - 1) * pageSize;
  return data.slice(start, start + pageSize);
};
