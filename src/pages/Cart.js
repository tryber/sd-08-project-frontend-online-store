import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const { location: { state: { productCart, productNumber } } } = this.props;
    return (
      <div>
        {productCart.length === 0
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : productCart.map((cart) => (
            <div key={ cart.title }>
              <p data-testid="shopping-cart-product-name">{cart.title}</p>
              <img src={ cart.thumbnail } alt={ cart.title } />
              <p>{`R$${cart.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">{productNumber}</p>
            </div>))}
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productCart: PropTypes.arrayOf(String),
      productNumber: PropTypes.number,
    }),
  }).isRequired,
};

export default Cart;
