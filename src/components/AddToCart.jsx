import React from 'react';
import PropTypes from 'prop-types';

import { saveToCart } from '../services/cart';

class AddToCart extends React.Component {
  render() {
    const { productInfos: { id, title, amount, testId } } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        onClick={ () => saveToCart(id, title, amount) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  productInfos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    testId: PropTypes.string.isRequired,
  }).isRequired,
};
export default AddToCart;
