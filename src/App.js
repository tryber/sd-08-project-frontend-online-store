import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home { ...props } />
            ) }
          />
          <Route
            path="/shopping-cart"
            render={ (props) => (
              <ShoppingCart { ...props } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
