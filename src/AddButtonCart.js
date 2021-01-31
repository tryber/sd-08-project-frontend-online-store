import React from 'react';

export default class AddButtonCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCart: [],
    };

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(product) {
    const { shoppingCart } = this.state;
    if (!shoppingCart.includes(product)) {
      this.setState({
        shoppingCart: [...shoppingCart, product],
      });
    }
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => this.addItemToCart(this.product) }
      >
        Adicionar produto ao carrinho
      </button>
    );
  }
}
