import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddToCart extends Component {
  render() {
    const { dataTestId, id, list, onClick, price } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        id={ id }
        price={ price }
        list={ list }
        onClick={ onClick }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

ButtonAddToCart.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

export default ButtonAddToCart;
