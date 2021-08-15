import React from "react";

const MatchesBanner = () => {
  return (
    <div>
      <div className="banner-image">
        <img src="assets/images/FDNWebImage_169.png" />
      </div>
      <div className="body-container matches">
        <div className="flex-item flex flex-end">
          <div className="banner-desc">
            <h2>Looking for products that are just simply perfect for you?</h2>
            <div>
              Here are some products that we believe match your skin, hair, and
              body! Have we mentioned that they solve your concerns too?
            </div>
            <div className="flex flex-end">
              <button className="bg-primary clickable">See My Matches</button>
            </div>
          </div>
        </div>
        <div className="flex-item default-card bg-white">
          <div className="image-container">
            <img src="assets/images/FDNWebImage_37.png" />
          </div>
          <div className="desc">
            <img src="assets/images/FDNWebImage_55.png" />
            <div className="desc-container">
              <h2>JUICE BEAUTY</h2>
              <p>Phyto-Pigments</p>
              <p>Flawless Serum...</p>
              <p>Rosy Beige</p>
            </div>
          </div>
        </div>
        <div className="flex-item default-card bg-white">
          <div className="image-container">
            <img src="assets/images/FDNWebImage_37.png" />
          </div>
          <div className="desc">
            <img src="assets/images/FDNWebImage_55.png" />
            <div className="desc-container">
              <h2>JUICE BEAUTY</h2>
              <p>Phyto-Pigments</p>
              <p>Flawless Serum...</p>
              <p>Rosy Beige</p>
            </div>
          </div>
        </div>
        <div className="flex-item default-card bg-white">
          <div className="image-container">
            <img src="assets/images/FDNWebImage_37.png" />
          </div>
          <div className="desc">
            <img src="assets/images/FDNWebImage_55.png" />
            <div className="desc-container">
              <h2>JUICE BEAUTY</h2>
              <p>Phyto-Pigments</p>
              <p>Flawless Serum...</p>
              <p>Rosy Beige</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesBanner;
