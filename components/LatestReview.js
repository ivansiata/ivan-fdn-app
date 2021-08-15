import React from "react";
import { useDispatch } from "react-redux";
import { setLatestReviewPage } from "../redux/actions/dataActions";
import LatestReviewCard from "./LatestReviewCard";

const LatestReview = ({ datas }) => {
  const dispatch = useDispatch();
  let renderLatestReviewCard = datas.data
    .slice(datas.slider.currentPage - 1, 2)
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
                datas.slider.firstPage ? null : "active"
              }`}
            ></i>
          </div>
          <div className="index-container">
            {[...Array(datas.slider.totalPage)].map((e, index) => (
              <span
                key={index}
                onClick={() =>
                  handleArrow(index + 1 - datas.slider.currentPage)
                }
                className={`slider-index clickable ${
                  datas.slider.currentPage == index + 1 ? "active" : null
                }`}
              ></span>
            ))}
          </div>
          <div className="arrow-container">
            <i
              onClick={() => handleArrow(1)}
              className={`arrow right clickable ${
                datas.slider.lastPage ? null : "active"
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
