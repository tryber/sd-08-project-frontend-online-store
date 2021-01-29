import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ButtonCart from './components/ButtonCart';
import Cart from './pages/Cart';
import CategoryList from './components/CategoryList';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <ButtonCart />
          <h1>Frontend Online Store</h1>
        </header>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route path="/" component={ SearchPage } />
        </Switch>
        <CategoryList />
      </div>
    </BrowserRouter>
  );
}

export default App;
