import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Listagem from './pages/listagem';
import Carrinho from './pages/carrinho';
import Detalhes from './pages/detalhes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Listagem } />
          <Route exact path="/carrinho" component={ Carrinho } />
          <Route exact path="/detalhes" component={ Detalhes } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
