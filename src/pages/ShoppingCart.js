import React from 'react';

import CartItems from '../components/CartItems';
import '../components/Header.css';
import logo from '../logo.png';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    let parsedItems;
    if (localStorage.cartItems) parsedItems = JSON.parse(localStorage.cartItems);
    if (!parsedItems) parsedItems = [];

    this.state = {
      items: parsedItems,
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({
      items: JSON.parse(localStorage.cartItems),
    });
  }

  render() {
    const { items } = this.state;
    if (items.length > 0) {
      return (
        <>
          <header className="header-body">
            <img src={ logo } alt="logo" />
          </header>
          <CartItems
            items={ items }
            handleChange={ this.updateState }
          />
        </>
      );
    }
    return (
      <>
        <header className="header-body">
          <img src={ logo } alt="logo" />
        </header>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      </>
    );
  }
}

export default ShoppingCart;
