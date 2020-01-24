import React from "react";
import { Route, Link } from "react-router-dom";

import HomePage from "./containers/homepage";
import Shop from "./containers/shop";

import "./App.css";

const Women = props => {
  console.log(props);
  const { match } = props;
  return (
    <React.Fragment>
      <Route path={`${match.url}/:productId`} component={WomenProduct} />
      <Link to={`${match.url}/12`}>
        <h2>Women Product</h2>
      </Link>
    </React.Fragment>
  );
};

const WomenProduct = props => {
  console.log(props);
  const { match } = props;
  return <h2>Women Product Details {match.params.productId}</h2>;
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/women" component={Women} />
      </React.Fragment>
    );
  }
}

export default App;
