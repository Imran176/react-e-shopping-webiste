import React from "react";
import "./previewCollections.scss";
import ColllectionItem from "../colllection-item/ColllectionItem";

const PreviewCollections = ({ title, items }) => {

  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <ColllectionItem key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default PreviewCollections;
