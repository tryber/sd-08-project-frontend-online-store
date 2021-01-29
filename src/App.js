import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
      </BrowserRouter>
    </main>
  );
}

export default App;
