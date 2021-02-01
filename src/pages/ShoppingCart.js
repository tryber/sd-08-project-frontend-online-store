import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { onCart } } } = this.props;
    this.state = {
      onCart,
    };
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        {
          onCart.length > 0 ? onCart.map((product, index) => (
            <div key={ index }>
              <img src={ product.thumbnail } alt={ product.title } />
              <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
              <p>{ product.price }</p>
              <p data-testid="shopping-cart-product-quantity">1</p>
            </div>))
            : (
              <div>
                <p data-testid="shopping-cart-empty-message">
                  Seu carrinho está vazio
                </p>
              </div>)
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      onCart: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
