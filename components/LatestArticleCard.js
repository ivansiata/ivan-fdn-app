import React from "react";

const LatestArticleCard = ({ title, author, image, publishedAt, testId }) => {
  return (
    <div data-testid={testId}>
      <img src="https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg" />
      <h4>{title}</h4>
      <span>
        {author} | {publishedAt}
      </span>
    </div>
  );
};

export default LatestArticleCard;
