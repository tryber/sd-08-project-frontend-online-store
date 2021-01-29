import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <main className="main-container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ ProductList } />
            <Route path="/shopping-cart" component={ ShoppingCart } />
            <Route path="/details/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
