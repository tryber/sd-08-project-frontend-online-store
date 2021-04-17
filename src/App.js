import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CarrinhoCompras from './pages/CarrinhoCompras';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/carrinho-compras" component={ CarrinhoCompras } />
          <Route path="/:id" component={ ProductDetail } />
          <Route path="/" component={ Home } />
        </Switch>
      </Router>
    );
  }
}

export default App;
