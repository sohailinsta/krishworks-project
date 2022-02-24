import './App.css';
import Product from './Product';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
          <Product/>
        </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
