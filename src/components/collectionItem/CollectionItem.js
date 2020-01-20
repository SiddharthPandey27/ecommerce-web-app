import React from "react";

import { Link } from "react-router-dom";

import "./styles.scss";

const CollectionItem = ({ collection, subTitle }) => {
  return (
    <div href={collection.linkUrl} className={`item-box ${collection.size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${collection.imageUrl})` }}
      ></div>
      <div className="item-content">
        <h1 className="item-title">{collection.title}</h1>
        <div className="sub-title">{subTitle}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
