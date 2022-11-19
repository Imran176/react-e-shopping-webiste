import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import SiginSignupPage from './pages/siginSignupPage/SiginSignupPage';

function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SiginSignupPage} />
      </Switch>
    </div>
  );
}

export default App;
