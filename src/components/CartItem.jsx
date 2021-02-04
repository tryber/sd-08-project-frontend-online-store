import React from 'react';
import { cartItemDecrease, cartItemIncrease } from '../services/cart';
import '../styles/CartItem.css';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { productInfos: { id, name, amount }, handleChangeCart } = this.props;
    const carImg = 'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/lamborghini_660_140220101539.jpg';
    return (
      <div className="cart-product-card">
        <p
          className="cart-product-title"
          data-testid="shopping-cart-product-name"
        >
          { name }
        </p>
        <div className="product-info">
          <button type="button" className="btn-remove">X</button>
          <img className="product-img" src={ carImg } alt="carro" />
          <button
            type="button"
            data-testid="product-decrease-quantity"
            className="btn-less"
            onClick={ () => {
              cartItemDecrease(id);
              handleChangeCart();
            } }
          >
            -
          </button>
          <span
            className="amount"
            data-testid="shopping-cart-product-quantity"
          >
            { amount }
          </span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            className="btn-more"
            onClick={ () => {
              cartItemIncrease(id);
              handleChangeCart();
            } }
          >
            +
          </button>
          <span className="product-price">R$0,00</span>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  productInfos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  handleChangeCart: PropTypes.func.isRequired,
};

export default CartItem;
