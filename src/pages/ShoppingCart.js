import React from 'react';
import CartItems from '../components/CartItems';

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
    console.log(items.length);
    return items.length > 0 ? (
      <CartItems
        items={ items }
        handleChange={ this.updateState }
      />
    ) : (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
