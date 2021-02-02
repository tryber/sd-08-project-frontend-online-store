import React from 'react';
import { localStorageLoad } from '../localStorage';
import '../css/ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
  }

  componentDidMount() {
    this.setLocalStorageState();
  }

  setLocalStorageState() {
    const results = localStorageLoad('shoppingCart');
    console.log(results);
    this.setState({ products: results });
  }

  renderMsgCartEmpty() {
    return (
      <div className="msg-cart-container">
        <h1
          className="msg-cart-empty"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h1>
      </div>);
  }

  renderImgProductCart(thumbnail, title) {
    return (
      <div className="img-product-content-cart">
        <img
          className="product-image-cart"
          src={ thumbnail }
          alt={ title }
        />
      </div>);
  }

  renderTitleProductCart(title) {
    return (
      <div className="product-content-title-cart">
        <span
          className="product-title-cart"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </span>
      </div>
    );
  }

  renderPriceProductCart(price) {
    return (
      <div className="product-content-price-cart">
        <span className="product-price-cart">{`R$${price}`}</span>
      </div>
    );
  }

  renderAmountProductCart(amount) {
    return (
      <div className="product-content-amount-cart">
        <span
          className="product-amount-cart"
          data-testid="shopping-cart-product-quantity"
        >
          {`QTD: ${amount}`}
        </span>
      </div>
    );
  }

  renderAddAmountProductCart(amount) {
    return (
      <div>
        <input
          value={ amount }
          type="number"
          min="1"
        />
      </div>
    );
  }

  renderRemoveProductToCart() {
    return (
      <div>
        <button type="button">REMOVER</button>
      </div>
    );
  }

  renderTotalPriceProductCart() {
    return (
      <div>
        <span>Total:</span>
      </div>
    );
  }

  render() {
    const { products } = this.state;
    console.log(products);
    if (!products) {
      return this.renderMsgCartEmpty();
    }
    return (
      <section className="container-shopping-cart" style={ { display: 'flex' } }>
        <div className="container-product-cart">
          {products.map((el, index) => (
            <div className="product-container-cart-info" key={ index }>
              {this.renderImgProductCart(el.thumbnail, el.title)}
              {this.renderTitleProductCart(el.title)}
              {this.renderPriceProductCart(el.price)}
              {this.renderAmountProductCart(el.amount)}
              {this.renderAddAmountProductCart()}
              {this.renderRemoveProductToCart()}
              {this.renderTotalPriceProductCart()}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
