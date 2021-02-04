import React from 'react';
import '../styles/CartItem.css';

class CartItem extends React.Component {
  render() {
    const { productInfos: { name, amount } } = this.props;
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
          <img
            className="product-img"
            src={ carImg }
            alt="carro"
          />
          <button type="button" className="btn-less">-</button>
          <span
            className="amount"
            data-testid="shopping-cart-product-quantity"
          >
            { amount }
          </span>
          <button type="button" className="btn-more">+</button>
          <span className="product-price">R$0,00</span>
        </div>
      </div>
    );
  }
}

export default CartItem;
