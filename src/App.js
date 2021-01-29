import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import InputSearch from './components/InputSearch';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ InputSearch } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
