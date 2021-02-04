import React from 'react';
import saveToCart from '../services/saveToCart';

class AddToCart extends React.Component {
  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => saveToCart(1, 'something', 2) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

export default AddToCart;
