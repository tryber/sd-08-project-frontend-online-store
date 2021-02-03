import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class ProductControls extends Component {
  render() {
    const { handleIncrease, handleDecrease, handleRemove, product } = this.props;
    return (
      <div className={ styles.controls }>
        <button
          onClick={ () => handleIncrease(product) }
          type="button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          onClick={ () => handleDecrease(product) }
          type="button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          onClick={ () => handleRemove(product) }
          type="button"
        >
          Remover
        </button>
      </div>
    );
  }
}

ProductControls.propTypes = {
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};

export default ProductControls;
