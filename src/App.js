import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Categories from './components/Categories';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <p>Time 26 - Req 2!</p>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ ProductList } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
      <Categories />
    </div>
  );
}

export default App;
