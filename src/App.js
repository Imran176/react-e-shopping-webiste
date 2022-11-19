import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SiginSignupPage from './pages/siginSignupPage/SiginSignupPage';

import { auth } from "./firebase/firebase.utils";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log("user: ", user);
    })
    return (()=> {
      unsubscribeFromAuth();
    })
  }, [currentUser])
  
  console.log("unsubscribeFromAuth: ", unsubscribeFromAuth);

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
