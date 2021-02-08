import React from 'react';
import PropTypes from 'prop-types';
import { FaBoxOpen } from 'react-icons/fa';

class Shop extends React.Component {
  renderEmptyCart() {
    return (
      <>
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
        <FaBoxOpen className="shopping-cart-empty-icon" />
      </>
    );
  }

  renderCart() {
    const { cart } = this.props;
    return (
      <div className="shopping-cart-items">
        {cart.map(({ title, productQuantity }, index) => (
          <div className="shopping-cart-item" key={ index }>
            <p data-testid="shopping-cart-product-name">{title}</p>
            <p data-testid="shopping-cart-product-quantity">
              {productQuantity}
            </p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <div className="shopping-cart-frame">
        {cart[0] ? this.renderCart() : this.renderEmptyCart()}
      </div>
    );
  }
}

Shop.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shop;
