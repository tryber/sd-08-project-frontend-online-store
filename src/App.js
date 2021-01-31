import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Carrinho from './Pages/Carrinho';
import DetalhesDoProduto from './Pages/DetalhesDoProduto';
import PaginaInicial from './Pages/PaginaInicial';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/details/:id" component={ DetalhesDoProduto } />
          <Route path="/cart" component={ Carrinho } />
          <Route exact path="/" component={ PaginaInicial } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
