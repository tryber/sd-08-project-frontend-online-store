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
      finalizarCompra: [],
    };

    this.addAoCarrinho = this.addAoCarrinho.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  getCartItems(obj) {
    this.setState({ finalizarCompra: obj });
  }

  addAoCarrinho(item) {
    const { carrinho } = this.state;
    const checkItem = carrinho.find((cart) => cart.id === item.id);
    if (!item.contador) item.contador = 1;
    if (!checkItem) {
      return this.setState({ carrinho: [...carrinho, item] });
    }
    if (checkItem.contador < checkItem.available_quantity) {
      checkItem.contador += 1;
      console.log(checkItem.available_quantity);
      this.setState({ carrinho: [...carrinho] });
    }

    // const novoValor = [...carrinho, item];
    // this.setState({
    //   carrinho: novoValor,
    //   contador: [...contador, 1],
    // });
    // console.log(contador);
  }

  render() {
    const { carrinho, finalizarCompra } = this.state;
    const totalLength = carrinho.length > 0 ? carrinho
      .reduce((acc, curr) => acc + curr.contador, 0) : 0;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shoplist"
              render={ () => (<Shoplist
                getCartItems={ this.getCartItems }
                carrinho={ carrinho }
              />) }
            />
            <Route
              exact
              path="/"
              render={ () => (<Home
                totalLength={ totalLength }
                addAoCarrinho={ this.addAoCarrinho }
              />) }
            />
          </Switch>
          <Route
            path="/details/:categoryId/:id"
            render={ (props) => (<Details
              totalLength={ totalLength }
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
