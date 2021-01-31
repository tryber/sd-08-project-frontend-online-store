import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
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
          <Route
            path="/product/:id"
            render={ (props) => (
              <ProductDetails { ...props } />
            ) }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
