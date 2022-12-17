import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import ContactusPage from './pages/contactusPage/ContactusPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from './redux/user/userSelector';

import { setCurrentUser } from "./redux/user/userActions";


function App(props) {
  // const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    const { setCurrentUser } = props;

    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // setCurrentUser({
          //   id: snapShot.id,
          //   ...snapShot.data()
          // })

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        // setCurrentUser(userAuth)
        setCurrentUser(userAuth)
      }
    });

    return (() => {
      unsubscribeFromAuth();
    })
  }, [])

  return (
    <div className="">
      {/* <Header currentUser={currentUser} /> */}
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactusPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          exact={true}
          render={() => props.currentUser ? (<Redirect to="/" />) : (<SignInSignUpPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
