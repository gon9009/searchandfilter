import React from "react";
import Card from "./components/Card";
// =======================================
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
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

  // 검색/필터링 결과
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
