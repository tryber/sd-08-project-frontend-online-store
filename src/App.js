import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './pages/Header';
import Cart from './pages/Cart';
import Hero from './components/Hero';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Hero />
        <Switch>
          <Route exact path="/cart/" component={ Cart } />
          <Route exact path="/" component={ Home } />
          <Route path="/details/:id" component={ Details } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
