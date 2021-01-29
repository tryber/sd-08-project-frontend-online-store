import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import PageShoppingCart from './pages/ShoppingCart';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/pages/shoppingcart" component={ PageShoppingCart } />
        <Route exact path="/" component={ SearchBar } />
      </Switch>
      <Button />
    </BrowserRouter>

  );
}

export default App;
