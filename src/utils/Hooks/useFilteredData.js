import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function useFilteredData(data, categoryName, debouncedSearch, likedEmojis) {
  const [filteredData, setFilteredData] = useState([]);

  // 카테고리 필터링 
  useEffect(() => {
    if (data && data.length > 0) {
      let filtered = data;
      if (categoryName) {
        if (categoryName === "liked") {
          filtered = likedEmojis;
        } else {
          filtered = filtered.filter(
            (emoji) =>
              emoji.category.toLowerCase() === categoryName.toLowerCase()
          );
        }
      }
      setFilteredData(filtered);
    }
  }, [data, categoryName, likedEmojis]);

  // 검색어 필터링 
  useEffect(() => {
    if (data && data.length > 0) {
      if (debouncedSearch) {
        const searchedData = data.filter((emoji) =>
          emoji.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        );
        setFilteredData(searchedData);
      } else {
        setFilteredData(data);
      }
    }
  }, [debouncedSearch, data]);

  return filteredData;
}

export default useFilteredData;
