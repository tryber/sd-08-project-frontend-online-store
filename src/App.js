import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import Home from './pages/Home';
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
        <Route
          path="/products-details/:id"
          render={ (props) => <ProductsDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
