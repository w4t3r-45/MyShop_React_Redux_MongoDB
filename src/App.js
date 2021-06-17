import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import ItemsList from './components/list';
import HistoryItemDetails from './components/HistoryItemDetails';
import ProductDetails from './components/ProductDetails';
import Shop from './components/shop';
import Logout from './components/logout';
import Login from './components/login';
import Signup from './components/signup';
import CurrentCart from './components/CurrentCart';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/product/details/:id"  >
            <ProductDetails />
          </Route>
          <Route path="/list" exact >
            <ItemsList />
          </Route>
          <Route path="/list/:id" exact >
              <HistoryItemDetails/>
          </Route>
          <Route path="/shop" exact>
            <Shop />
          </Route>
          <Route path="/shop/current/:id" exact>
            <CurrentCart />
          </Route>
          <Route path="/logout"  >
            <Logout />
          </Route>
          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/signup" >
            <Signup />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
