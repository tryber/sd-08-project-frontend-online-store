import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shoplist from './components/Shoplist';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
    };

    this.addAoCarrinho = this.addAoCarrinho.bind(this);
  }

  addAoCarrinho(item) {
    const { carrinho } = this.state;
    const novoValor = [...carrinho, item];
    this.setState({ carrinho: novoValor });
  }

  render() {
    const { carrinho } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/shoplist" render={ () => <Shoplist carrinho={ carrinho } /> } />
            <Route
              exact
              path="/"
              render={ () => <Home addAoCarrinho={ this.addAoCarrinho } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
