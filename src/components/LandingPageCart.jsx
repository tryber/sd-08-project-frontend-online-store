import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LandingPageCart extends Component {
  render() {
    const { location: { cartProduct } } = this.props;
    return (
      <section>
        {cartProduct.map((product, index) => (
          <div key={ index }>
            <img src={ product.thumbnail } alt={ product.title } />
            <h3 data-testid="shopping-cart-product-name">{product.title}</h3>
            <p data-testid="shopping-cart-product-quantity">1</p>
          </div>
        ))}
        <div>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      </section>
    );
  }
}

LandingPageCart.propTypes = {
  location: PropTypes.shape({
    cartProduct: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default LandingPageCart;
