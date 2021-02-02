import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class AddItem extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, price } = this.props;
    let products = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products')) {
      products = JSON.parse(sessionStorage.getItem('products'));
    }
    const item = { title, price };
    sessionStorage.setItem('products', JSON.stringify([...products, item]));
  }

  render() {
    const { dataTestId } = this.props;
    return (
      <span>
        <FaPlusCircle
          data-testid={ dataTestId }
          className="add-to-cart"
          onClick={ this.addToCart }
        />
        Adicionar ao carrinho
      </span>
    );
  }
}
AddItem.defaultProps = {
  products: {},
};
AddItem.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  products: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default AddItem;
