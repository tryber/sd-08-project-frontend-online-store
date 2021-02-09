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

  renderTotal() {
    const { cart } = this.props;
    let totalPrice = 0;
    totalPrice = cart.reduce((total, item) => {
      total = item.price * item.productQuantity;
      return total;
    }, 0);
    return totalPrice;
  }

  renderCart() {
    const { cart, handleIncrease, handleDecrease } = this.props;
    return (
      <div className="shopping-cart-items">
        {cart.map(({ productQuantity, title, price, thumbnail }, index) => (
          <div className="shopping-cart-item" key={ index }>
            <img src={ thumbnail } alt={ title } />
            <p data-testid="shopping-cart-product-name">{title}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => handleIncrease(index) }
              name="productQuantity"
              id="product-quantity"
            >
              +
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => handleDecrease(index) }
              name="productQuantity"
              id="product-quantity"
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">
              Quantidade de itens:
              {' '}
              {productQuantity}
            </p>
            <p>
              Preço Unitário:
              {price}
            </p>
            <p>
              Preço dos itens:
              {price * productQuantity}
            </p>
          </div>
        ))}
        <p>
          Total:
          {this.renderTotal()}
        </p>
      </div>
    );
  }

  render() {
    const { cart } = this.props;
    return (
      <div className="shopping-cart-frame">
        {cart[0] ? this.renderCart() : this.renderEmptyCart()}
      </div>
    );
  }
}

Shop.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
};

export default Shop;
