import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth, createUserProfileDoc } from "./firebase/firebase";

import SignIn from "./containers/signIn";

import Header from "./components/header/header";
import HomePage from "./containers/homepage";
import Shop from "./containers/shop";

import { setCurrentUser } from "./actions/user.actions";

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
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log("Unsubscribe");
  }

  render() {
    return (
      <React.Fragment>
        <Header />
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

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
