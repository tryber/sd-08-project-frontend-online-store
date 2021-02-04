import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      onCart: this.loadOncart(),
    };
  }

  loadOncart = () => ((localStorage.onCart)
    ? JSON.parse(localStorage.getItem('onCart'))
    : [])

  saveOncart = () => {
    const { onCart } = this.state;
    localStorage.setItem('onCart', JSON.stringify(onCart));
  }

  componentDidUpdate = () => {
    this.saveOncart();
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
    this.saveOncart();
    const { onCart } = this.state;
    const isReapeated = onCart.find(
      (productOnCart) => productOnCart.id === product.id,
    );
    if (isReapeated !== undefined) {
      let position;
      for (let index = 0; index < onCart.length; index += 1) {
        if (onCart[index].id === product.id) {
          position = index;
        }
      }
      onCart[position].amount += 1;
      this.setState({
        onCart,
      });
    } else {
      product.amount = 1;
      this.setState({
        onCart: [...onCart, product],
      });
    }
  }

  sumPrice = (array) => {
    const result = array.reduce((accumulate, currentObject) => accumulate
    + parseFloat(currentObject.price)
    * currentObject.amount, 0);
    return (
      <h3>
        {`R$ ${result}`}
      </h3>
    );
  }

  updateTotalAmount = () => {
    const { onCart } = this.state;
    if (onCart.length !== 0) {
      const sumAmount = onCart.reduce((accumulate, currentObject) => accumulate
      + currentObject.amount, 0);
      return (sumAmount);
    }
  }

  renderHome = (props) => (
    <Home
      { ...props }
      addCart={ this.addCart }
      sumAmount={ this.updateTotalAmount() }
    />
  )

  renderShoppingCart = (props) => {
    const { onCart } = this.state;
    return (
      <ShoppingCart
        { ...props }
        onCart={ onCart }
        increaseQuantity={ this.increaseQuantity }
        decreaseQuantity={ this.decreaseQuantity }
        deleteProduct={ this.deleteProduct }
        sumPrice={ this.sumPrice }
      />
    );
  }

  renderProductDetails = (props) => {
    const { onCart } = this.state;
    return (
      <ProductDetails
        { ...props }
        onCart={ onCart }
        addCart={ this.addCart }
        sumAmount={ this.updateTotalAmount() }
      />
    );
  }

  renderCheckout = (props) => {
    const { onCart } = this.state;
    return (
      <Checkout { ...props } onCart={ onCart } sumPrice={ this.sumPrice } />
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ this.renderHome }
            />
            <Route
              path="/shopping-cart"
              render={ this.renderShoppingCart }
            />
            <Route
              path="/product/:id"
              render={ this.renderProductDetails }
            />
            <Route
              path="/checkout"
              render={ this.renderCheckout }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
