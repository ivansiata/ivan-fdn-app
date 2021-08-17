import React from "react";
import { useDispatch } from "react-redux";
import { setLatestReviewPage } from "../redux/actions/dataActions";

const Slider = ({ data }) => {
  const dispatch = useDispatch();
  const handleArrow = (value) => {
    dispatch(setLatestReviewPage(value));
  };

  return (
    <div className="slider-nav inside-row">
      <div className="arrow-container">
        <i
          data-testid="left-arrow"
          onClick={() => handleArrow(-1)}
          className={`arrow left clickable ${data.firstPage ? null : "active"}`}
        ></i>
      </div>
      <div className="index-container">
        {[...Array(data.totalPage)].map((e, index) => (
          <span
            key={index}
            onClick={() => handleArrow(index + 1 - data.currentPage)}
            className={`slider-index clickable ${
              data.currentPage == index + 1 ? "active" : null
            }`}
          ></span>
        ))}
      </div>
      <div className="arrow-container">
        <i
          data-testid="right-arrow"
          onClick={() => handleArrow(1)}
          className={`arrow right clickable ${data.lastPage ? null : "active"}`}
        ></i>
      </div>
    </div>
  );
};

export default Slider;
