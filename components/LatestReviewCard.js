import React from "react";
import CardRating from "./CardRating";

const LatestReviewCard = ({ user, profile, product, star, comment }) => {
  return (
    <div className="card">
      <div className="main">
        <div className="header">
          <div className="image-container">
            <img src={product.image} />
          </div>
          <div className="flex center">
            <div>
              <h5>{product.name}</h5>
              <h5>{product.desc}</h5>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="flex flex-space-between">
            <CardRating rating={star} />
            <div className="flex center">2 hours ago</div>
          </div>
          <p className="card-row">
            {comment} <span className="primary clickable"> Read More</span>
          </p>
        </div>
      </div>
      <div className="reviewer">
        <div>
          <div className="flex center">
            <div className="image-container">
              <img src="assets/images/FDNWebImage_18.png" />
            </div>
          </div>
          <div>
            <div>
              <div>{user}</div>
              <div className="font-sm primary-gray card-row">
                {profile.join(", ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestReviewCard;
