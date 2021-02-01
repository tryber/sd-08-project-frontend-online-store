import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Details from './components.js/Details';
import CartCheckout from './pages/CartCheckout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cartcheckout" component={ CartCheckout } />
        <Route
          exact
          path="/details/:product"
          render={ (props) => (
            <Details { ... props } />
          ) }
        />
        <Route
          path="/"
          render={ (props) => (
            <Home { ...props } />
          ) }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
