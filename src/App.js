import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';

import Header from './pages/Header';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
