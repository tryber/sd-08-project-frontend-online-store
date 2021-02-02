import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddToCart extends Component {
  render() {
    const { addCart, dataTestId, product } = this.props;

    return (
      <button
        type="button"
        onClick={ () => addCart(product) }
        data-testid={ dataTestId }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonAddToCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default ButtonAddToCart;
