import React from "react";

const SectionTitle = ({ title, subtitle, seeMore }) => {
  return (
    <div className="section-title">
      <div className="flex-item">
        <h3>{title}</h3>
        <h5 className="primary-gray">{subtitle}</h5>
      </div>
      {seeMore ? (
        <div className="flex-item see-more primary clickable">
          <span>See More</span>
          <div className="flex center">
            <img src="assets/images/FDNWebImage_111.png" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SectionTitle;
