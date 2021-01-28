import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Listagem from './pages/listagem';
import Carrinho from './pages/carrinho';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Listagem } />
          <Route exact path="/carrinho" component={ Carrinho } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
