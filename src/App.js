import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonCart from './components/ButtonCart';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <ButtonCart />
      <Switch>
        <Route path="/cart" component={ Cart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
