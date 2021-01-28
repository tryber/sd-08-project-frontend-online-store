import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartIcon from './components/CartIcon';
import CartPage from './components/CartPage';
import './App.css';
import './services/api';
import ListagemDeProdutos from './components/ListagemDeProdutos';

function App() {
  return (
    <section>
      <BrowserRouter>
        <CartIcon />
        <Switch>
          <Route path="/shoppingCart" component={ CartPage } />
        </Switch>
      </BrowserRouter>
      <ListagemDeProdutos />
    </section>
  );
}

export default App;
