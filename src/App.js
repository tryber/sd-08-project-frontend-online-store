import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Cart from './pages/Cart';

import Home from './pages/Home';

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/cart/" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
