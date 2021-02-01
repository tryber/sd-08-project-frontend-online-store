import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAddToCart extends Component {
  render() {
    const { dataTestId, id, list, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        id={ id }
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
};

export default ButtonAddToCart;
