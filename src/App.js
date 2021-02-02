import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/Shopping-cart';
import ProductDetail from './Pages/ProductDetail';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route exact path="/" component={ Home } />
        <Route path="/details/:id" component={ ProductDetail } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/* function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shopping-cart" component={ //ShoppingCart } />
        <Route exact path="/" component={ //Home } />
        <Route path="/details/:id">
          <ProductDetail
            productList={ productList }
            handleRequest={ handleRequest }
            handleAddToCart={ handleAddToCart }
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App; */
