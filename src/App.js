import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shoplist from './components/Shoplist';
import './style/productCard.css';
import Details from './components/Details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
      contador: [],
    };

    this.addAoCarrinho = this.addAoCarrinho.bind(this);
  }

  addAoCarrinho(item) {
    const { carrinho, contador } = this.state;
    const novoValor = [...carrinho, item];
    this.setState({
      carrinho: novoValor,
      contador: [...contador, 1],
    });
    // console.log(contador);
  }

  render() {
    const { carrinho, contador } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shoplist"
              render={ () => <Shoplist carrinho={ carrinho } contador={ contador } /> }
            />
            <Route
              exact
              path="/"
              render={ () => <Home addAoCarrinho={ this.addAoCarrinho } /> }
            />
          </Switch>
          <Route
            path="/details/:categoryId/:id"
            render={ (props) => (<Details
              addAoCarrinho={ this.addAoCarrinho }
              { ...props }
            />) }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
