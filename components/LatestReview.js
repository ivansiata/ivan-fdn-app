import React from "react";
import { useDispatch } from "react-redux";
import { setLatestReviewPage } from "../redux/actions/dataActions";
import LatestReviewCard from "./LatestReviewCard";

const LatestReview = ({ datas }) => {
  const dispatch = useDispatch();
  let sliderData = datas["latest review slider"];
  let renderLatestReviewCard = datas["latest review"]
    .slice(sliderData.currentPage - 1, 2)
    .map((data, index) => {
      return (
        <LatestReviewCard
          key={index}
          user={data.user}
          profile={data.profile}
          product={data.product}
          star={data.star}
          comment={data.comment}
        />
      );
    });
  const handleArrow = (value) => {
    console.log(value);
    dispatch(setLatestReviewPage(value));
  };
  return (
    <div className="latest-review inside-row">
      <div className="flex-item">
        <div className="card-section">
          <>{renderLatestReviewCard}</>
        </div>
        <div className="slider-nav inside-row">
          <div className="arrow-container">
            <i
              onClick={() => handleArrow(-1)}
              className={`arrow left clickable ${
                sliderData.firstPage ? null : "active"
              }`}
            ></i>
          </div>
          <div className="index-container">
            {[...Array(sliderData.totalPage)].map((e, index) => (
              <span
                key={index}
                onClick={() => handleArrow(index + 1 - sliderData.currentPage)}
                className={`slider-index clickable ${
                  sliderData.currentPage == index + 1 ? "active" : null
                }`}
              ></span>
            ))}
          </div>
          <div className="arrow-container">
            <i
              onClick={() => handleArrow(1)}
              className={`arrow right clickable ${
                sliderData.lastPage ? null : "active"
              }`}
            ></i>
          </div>
        </div>
      </div>
      <div className="flex-item">
        <div className="flex center mr2">
          <div>
            <h3>MR 2</h3>
            <h3>MR 250</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReview;
