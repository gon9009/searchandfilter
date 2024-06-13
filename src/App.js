import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import products from "./data/products";

// 상태가 변하면 => 리액트 원리 재실행

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // 입력 필터링(Nav 영역 상품 검색)
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 사이드바 버튼
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // 추천 영역 버튼
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selectedCategory, query) {
    let filteredItems = products;
    // 1. 입력 필터링 적용
    if (query) {
      filteredItems = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // 2. 선택된 필터 적용
    if (selectedCategory) {
      filteredItems = filteredItems.filter((item) => {
        const { category, color, company, newPrice, title } = item;
        return [category, color, company, newPrice, title].includes(
          selectedCategory
        );
      });
    }

    // 3. 결과 반환
    return filteredItems.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={title}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;
