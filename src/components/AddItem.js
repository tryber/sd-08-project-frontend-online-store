import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      itensOnCart: 0,
    };
    this.updateItensOnCart = this.updateItensOnCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  updateItensOnCart(quantity) {
    let { itensOnCart } = this.state;
    this.setState({ itensOnCart: itensOnCart + quantity }, () => {
      if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
        itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
      }
      sessionStorage.setItem(
        'itensOnCart',
        JSON.stringify(itensOnCart + quantity),
      );
    });
  }

  addToCart() {
    const { title, quantity } = this.props;
    let products = [];
    if ({}.hasOwnProperty.call(sessionStorage, 'products')) {
      products = JSON.parse(sessionStorage.getItem('products'));
    }
    const item = { title };
    sessionStorage.setItem('products', JSON.stringify([...products, item]));
    this.updateItensOnCart(quantity);
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
  quantity: PropTypes.number.isRequired,
  products: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default AddItem;
