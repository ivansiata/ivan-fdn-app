import React from "react";

const PopularGroupCard = ({ profileImage }) => {
  return (
    <div className="card">
      <div className="flex flex-column center">
        <div>
          <img src={`assets/images/${profileImage}.png`} />
        </div>
        <h3>Embrace the Curl</h3>
        <div className="card-nav inside-row">
          <img src="assets/images/FDNWebImage_101.png" />
          <img src="assets/images/FDNWebImage_103.png" />
          <img src="assets/images/FDNWebImage_105.png" />
        </div>
        <div className="text-center">May our curls pop and never stop!</div>
      </div>
    </div>
  );
};

export default PopularGroupCard;
