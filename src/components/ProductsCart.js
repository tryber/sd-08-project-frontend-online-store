import React from 'react';
import PropTypes from 'prop-types';

class ProductsCart extends React.Component {
  render() {
    const { product: { title, price } } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <span>
          R$
          {price}
        </span>
        <span data-testid="shopping-cart-product-quantity">1</span>
      </div>
    );
  }
}

ProductsCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductsCart;
