import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Products() {
  return (
    <section className="card-container">
      <section className="card">
        {/* 상품 이미지 */}
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="신발"
          className="card-img"
        />

        {/* 상품 세부정보(상품이름/리뷰)*/}
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="card-reviews">
            <AiFillStar className="rating-stars" />
            <AiFillStar className="rating-stars" />
            <AiFillStar className="rating-stars" />
            <AiFillStar className="rating-stars" />
            <span className="total-reviews">4</span>
          </section>

          {/* 상품가격 */}
          <section className="card-price">
            {/* 세일 강조용 Del 태그 */}
            <div className="price">
              <del>$300</del>
            </div>

            {/* 징바구니 담기 */}
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

export default Products;
