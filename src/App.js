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

// import { addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { selectCollectionsForPreview } from './redux/shop/shopSelector';

import { setCurrentUser } from "./redux/user/userActions";


function App(props) {
  // const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    const { setCurrentUser } = props;
    // const { setCurrentUser, collectionsArray } = props;

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
        setCurrentUser(userAuth);
        // addCollectionAndDocuments(
        //   'collections',
        //   collectionsArray.map(({ title, items }) => ({ title, items })))
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
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Line# 18, 19, 25, 30, 49, 81 were written so that we don't have to 
// manually enter our shop data ( collection and item ) into Firebase.

export default connect(mapStateToProps, mapDispatchToProps)(App);
