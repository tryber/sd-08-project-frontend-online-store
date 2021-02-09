import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnAddCart extends Component {
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

BtnAddCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default BtnAddCart;
