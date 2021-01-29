import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import CarrinhoCompras from './pages/CarrinhoCompras';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/carrinho-compras" component={ CarrinhoCompras } />
        <Route exact path="/" component={ Home } />
      </Router>
    );
  }
}

export default App;
