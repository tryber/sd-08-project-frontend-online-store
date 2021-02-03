import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
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
