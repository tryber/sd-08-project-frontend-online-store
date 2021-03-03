import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shoplist from './components/Shoplist';
import './style/productCard.css';
import Details from './components/Details';
import FinalizarCompra from './components/FinalizarCompra';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
      contador: [],
      finalizarCompra: [],
    };

    this.addAoCarrinho = this.addAoCarrinho.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  getCartItems(obj) {
    this.setState({ finalizarCompra: obj });
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
    const { carrinho, contador, finalizarCompra } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shoplist"
              render={ () => (<Shoplist
                getCartItems={ this.getCartItems }
                carrinho={ carrinho }
                contador={ contador }
              />) }
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
          <Route
            path="/finalizarCompra"
            render={ (props) => (<FinalizarCompra
              carrinho={ finalizarCompra }
              { ...props }
            />) }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
