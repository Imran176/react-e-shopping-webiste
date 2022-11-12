import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className="">
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
