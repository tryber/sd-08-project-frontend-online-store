import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    const { title, price, availableQuantity, updateItensOnCart } = this.props;
    let products = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products')) {
      products = JSON.parse(sessionStorage.getItem('products'));
    }
    const item = { title, price, availableQuantity };
    sessionStorage.setItem('products', JSON.stringify([...products, item]));
    let itensOnCart = 0;
    if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
      itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
    }
    sessionStorage.setItem('itensOnCart', JSON.stringify(itensOnCart + 1));
    updateItensOnCart();
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
  updateItensOnCart: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  products: PropTypes.shape({
    title: PropTypes.string,
    availableQuantity: PropTypes.number.isRequired,
  }),
};

export default AddItem;
