import React from 'react';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonCart from './components/ButtonCart';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <ButtonCart />
          <Link to="/">
            <h1>Frontend Online Store</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/ProductDetails/:id" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route path="/" component={ SearchPage } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
