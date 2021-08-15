import React from "react";

const AdBanner = ({ type }) => {
  return (
    <div className="flex center inside-row">
      <div className={type}>
        <h3>Top Frame 970x50</h3>
      </div>
    </div>
  );
};

export default AdBanner;
