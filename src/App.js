import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';

import Home from './pages/Home';

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
