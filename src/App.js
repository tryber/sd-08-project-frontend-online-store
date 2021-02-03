import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onCart: [],
    };
  }

  componentDidMount() {
    // Foi necessario salvar o carrinho no localStorage para o requisito 13 e depois recuperar ele, creio que seja um erro no teste.
    this.getLastCart();
  }

  componentDidUpdate(prevProps) {
    // Essas prevProps são necessarias para fazer comparações afim de evitar um loop infinito dentro do desta função =).
    this.setCurrentCart(prevProps);
  }

  getLastCart = () => {
    const lastCart = localStorage.getItem('lastCart');
    if (lastCart) {
      this.setState({ onCart: JSON.parse(lastCart) });
    }
  }

  setCurrentCart = (props) => {
    const { onCart } = this.state;
    if (props !== onCart) {
      localStorage.setItem('lastCart', JSON.stringify(onCart));
    }
  }

  increaseQuantity = (event) => {
    const { onCart } = this.state;
    let position;
    for (let index = 0; index < onCart.length; index += 1) {
      if (onCart[index].title === event.target.value) {
        position = index;
      }
    }
    onCart[position].amount += 1;
    this.setState({
      onCart,
    });
  };

  decreaseQuantity = (event) => {
    const { onCart } = this.state;
    let position;
    for (let index = 0; index < onCart.length; index += 1) {
      if (onCart[index].title === event.target.value) {
        position = index;
      }
    }
    if (onCart[position].amount === 1) {
      const productToDelete = onCart.find((product) => (
        event.target.value === product.title));
      const newList = onCart.filter((product) => product.title !== productToDelete.title);
      this.setState({
        onCart: newList,
      });
    } else {
      onCart[position].amount -= 1;
      this.setState({
        onCart,
      });
    }
  }

  deleteProduct = (event) => {
    const { onCart } = this.state;
    const productToDelete = onCart.find((product) => (
      event.target.value === product.title));
    const newList = onCart.filter((product) => product.title !== productToDelete.title);
    this.setState({
      onCart: newList,
    });
  }

  addCart = (product) => {
    // const { onCart } = this.state;
    // this.setState({ onCart: [...onCart, product] });
    // Foi necessario remover a logica que removia elementos repetidos no carrinho, pois estavam dando problemas com o requisito 13!
    const { onCart } = this.state;
    // Foi necessario mudar a logica desse setState, o lint estava berrando.
    this.setState({ onCart: [...onCart, product] });
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home { ...props } onCart={ onCart } addCart={ this.addCart } />
              ) }
            />
            <Route
              path="/shopping-cart"
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                  onCart={ onCart }
                  increaseQuantity={ this.increaseQuantity }
                  decreaseQuantity={ this.decreaseQuantity }
                  deleteProduct={ this.deleteProduct }
                />
              ) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  onCart={ onCart }
                  addCart={ this.addCart }
                />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
