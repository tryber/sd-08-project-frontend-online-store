import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartList extends Component {
  render() {
    const {
      image,
      title,
      price,
      qtd,
      key,
      removeItem,
      addSubButton,
      id,
    } = this.props;
    return (
      <div key={ key }>
        <img src={ image } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{title}</h2>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          {qtd}
        </p>
        <button type="button" onClick={ () => removeItem(id) }>
          REMOVER
        </button>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addSubButton(id, 'add') }
        >
          ADICIONAR
        </button>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => addSubButton(id, 'sub') }
        >
          SUBTRAIR
        </button>
      </div>
    );
  }
}

ShoppingCartList.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qtd: PropTypes.number.isRequired,
  key: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  addSubButton: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
