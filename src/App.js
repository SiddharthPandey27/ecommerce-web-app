import React from "react";
import { Route, Link } from "react-router-dom";

import { auth } from './firebase/firebase';

import SignIn from "./containers/signIn";

import Header from "./components/header/header";
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
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log("Unsubscribe");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <React.Fragment>
        <Header 
          currentUser={currentUser}
        />
        <div className="app-body">
          <Route exact path="/" component={HomePage} />

          <Route exact path="/signIn" component={SignIn} />

          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/women" component={Women} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
