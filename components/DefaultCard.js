import React from "react";
import CardRating from "./CardRating";

const DefaultCard = ({ product }) => {
  return (
    <div className="default-card border-light">
      <div className="image-container">
        <img src={product.image} />
      </div>
      <div className="desc inside-row">
        <CardRating rating={product.rating} />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DefaultCard;
