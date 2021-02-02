import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cartItems: [],
    };
  }

  render() {
    const cart = getCartFromLocalStorage();
    return (
      cart.length > 0
        ? (cart.map(({ title, amount, id }) => <CartItem key={ id } title={ title } amount={ amount } />))
        : (
          <div>
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          </div>
        )
    );
  }
}

export default Cart;
