import React from "react";
import DefaultCard from "./DefaultCard";

const EditorChoiceCard = ({ editor, role, product, testId }) => {
  return (
    <div data-testid={testId} className="flex-item card">
      <div className="editor">
        <div className="image-container">
          <img src={`assets/images/FDNWebImage_21.png`} />
        </div>
        <div>
          <div>{editor}</div>
          <div className="font-sm primary-gray card-row">{role}</div>
        </div>
      </div>
      <div className="main">
        <DefaultCard product={product} />
      </div>
    </div>
  );
};

export default EditorChoiceCard;
