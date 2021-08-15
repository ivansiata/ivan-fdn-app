import React from "react";

const CardRating = ({ rating }) => {
  const activeStar = Math.floor(rating);
  const inactiveStar = 5 - activeStar;
  return (
    <div className="rating">
      <h3>{rating}</h3>
      <div className="star">
        {[...Array(activeStar)].map((e, index) => (
          <div key={index} className="flex center">
            <img src="assets/images/FDNWebImage_170.png" />
          </div>
        ))}
        {[...Array(inactiveStar)].map((e, index) => (
          <div key={index} className="flex center">
            <img src="assets/images/FDNWebImage_171.png" />
          </div>
        ))}
      </div>
      <h3>(7)</h3>
    </div>
  );
};

export default CardRating;
