import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import ContactusPage from "./pages/contactusPage/ContactusPage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import SignInSignUpPage from "./pages/signInSignUpPage/SignInSignUpPage";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelector";
import { checkUserSession } from "./redux/user/userActions";

function App(props) {
  let unsubscribeFromAuth = null;

  useEffect(() => {
    const { checkUserSession } = props;
    checkUserSession();
  }, []);

  return (
    <div className="">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactusPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          exact={true}
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
