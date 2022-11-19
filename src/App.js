import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SiginSignupPage from './pages/siginSignupPage/SiginSignupPage';

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth)
      }
    });

    return (() => {
      unsubscribeFromAuth();
    })
  }, [])

  return (
    <div className="">
      <Header currentUser={currentUser} />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SiginSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
