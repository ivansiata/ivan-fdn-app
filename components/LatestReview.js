import React from "react";
import LatestReviewCard from "./LatestReviewCard";
import Slider from "./Slider";

const LatestReview = ({ datas }) => {
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
          testId={`latest-review-${index + 1}`}
        />
      );
    });
  return (
    <div className="latest-review inside-row">
      <div className="flex-item">
        <div className="card-section">
          <>{renderLatestReviewCard}</>
        </div>
        <Slider data={datas.slider} />
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
