import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartIcon />
      <Switch>
        <Route path="/shoppingCart" component={ CartPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
