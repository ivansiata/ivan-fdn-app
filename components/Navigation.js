import React from "react";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="flex-item flex">
        <div className="flex-item flex center">
          <div className="clickable">
            <img src="assets/images/FDNWebImage_03.png" />
          </div>
        </div>
        <div className="flex-item flex center">
          <div className="clickable">
            <img src="assets/images/FDNWebImage_05.png" />
          </div>
        </div>
      </div>
      <div className="flex-item flex center">
        <div className="search-box">
          <div>
            <img className="clickable" src="assets/images/FDNWebImage_11.png" />
          </div>
          <span>Search products, articles, topics, brands, etc</span>
        </div>
      </div>
      <div className="flex-item flex center bg-primary">
        <div className="signup-box clickable">
          <div>
            <img src="assets/images/FDNWebImage_08.png" />
          </div>
          <span>LOGIN / SIGNUP</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
