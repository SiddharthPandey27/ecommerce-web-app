import React from "react";

import { Link, withRouter } from 'react-router-dom';

import "./styles.scss";

const HomepageItem = ({ collection, subTitle, match }) => {
  return (
    <Link to={(`${match.url}${collection.linkUrl}`)} className={`item-box ${collection.size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${collection.imageUrl})` }}
      ></div>
      <div className="item-content">
        <h1 className="item-title">{collection.title}</h1>
        <div className="sub-title">{subTitle}</div>
      </div>
    </Link>
  );
};

export default withRouter(HomepageItem);
