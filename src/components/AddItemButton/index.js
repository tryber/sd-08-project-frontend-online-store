import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class AddItemButton extends Component {
  render() {
    const { handleAddToCart, product, ...props } = this.props;
    return (
      <button
        type="button"
        className={ styles.addItemButton }
        onClick={ () => { handleAddToCart(product); } }
        { ...props }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddItemButton.propTypes = {
  handleAddToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default AddItemButton;
