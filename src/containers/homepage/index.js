import React from "react";
import { Link } from 'react-router-dom';

import HomepageList from "../../components/homepageList/homepageList";

import "./styles.scss";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collectionTypes: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/women"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/men"
        }
      ]
    };
  }

  render() {
    const { collectionTypes } = this.state;
    return (
      <div className="homepage">
        <HomepageList collectionTypes={collectionTypes} />
        <Link to={`/shop`}>
          <h1>Enter the Shop > </h1>
        </Link>
      </div>
    );
  }
}

export default HomePage;
