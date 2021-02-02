import React from 'react';

class CartCheckout extends React.Component {
  constructor() {
    super();

    this.state = {
      products: {},
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        {/* {products.map((item) => ({ ...item, qty: 0 }))} */}
        ;
      </div>
    );
  }
}

export default CartCheckout;
