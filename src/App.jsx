
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductsDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  increaseQty = (event) => {
    const { cart } = this.state;
    let position;
    for (let index = 0; index < cart.length; index += 1) {
      if (cart[index].title === event.target.value) {
        position = index;
      }
    }
    cart[position].amount += 1;
    this.setState({
      cart,
    });
  };

  decreaseQty = (event) => {
    const { cart } = this.state;
    let position;
    for (let index = 0; index < cart.length; index += 1) {
      if (cart[index].title === event.target.value) {
        position = index;
      }
    }
    if (cart[position].amount === 1) {
      const productToDelete = cart.find((product) => (
        event.target.value === product.title));
      const newList = cart.filter((product) => product.title !== productToDelete.title);
      this.setState({
        cart: newList,
      });
    } else {
      cart[position].amount -= 1;
      this.setState({
        cart,
      });
    }
  }

  deleteItem = (event) => {
    const { cart } = this.state;
    const productToDelete = cart.find((product) => (
      event.target.value === product.title));
    const newList = cart.filter((product) => product.title !== productToDelete.title);
    this.setState({
      cart: newList,
    });
  }

  addCart = (product) => {
    this.setState((prevState) => {
      const isReapeated = prevState.cart.find(
        (productOnCart) => productOnCart.title === product.title,
      );
      if (isReapeated === undefined) {
        return {
          cart: [...prevState.cart, product],
        };
      }
    });
  }

  totalPrice = (array) => {
    const result = array.reduce((acc, cur) => acc
    + parseFloat(cur.price)
    * cur.amount, 0);
    return (
      <h3>
        {`R$ ${result.toFixed(2)}`}
      </h3>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  addCart={ this.addCart }
                />
              ) }
            />
            <Route
              path="/shopping-cart"
              render={ (props) => (
                <ShoppingCart
                  { ...props }
                  cart={ cart }
                  increaseQty={ this.increaseQty }
                  decreaseQty={ this.decreaseQty }
                  deleteItem={ this.deleteItem }
                  totalPrice={ this.totalPrice }
                />
              ) }
            />
            <Route
              path="/product/:id"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  cart={ cart }
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