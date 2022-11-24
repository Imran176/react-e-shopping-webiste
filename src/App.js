import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SiginSignupPage from './pages/siginSignupPage/SiginSignupPage';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/userActions";

function App(props) {
  // const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  
  useEffect(() => {
    const { setCurrentUser } = props;
    console.log("Redux-setCurrentUser ",setCurrentUser);
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
        <Route path="/signin" component={SiginSignupPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
