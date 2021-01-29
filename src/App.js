import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Cart from './pages/Cart';

import Home from './pages/Home';

function App() {
  return (
    <main>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/cart/" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <Link
            to="/cart/"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
      </BrowserRouter>
    </main>
  );
}

export default App;
