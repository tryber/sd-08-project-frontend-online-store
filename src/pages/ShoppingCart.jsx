import React from 'react';
import { Link } from 'react-router-dom';
import { localStorageLoad, localStorageSaveCarItems } from '../localStorage';
import '../css/ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.setLocalStorageState = this.setLocalStorageState.bind(this);
    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.handleChangeSub = this.handleChangeSub.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount() {
    this.setLocalStorageState();
  }

  componentDidUpdate(__prevProps, prevState) {
    const { products } = this.state;
    if (prevState.products !== products) {
      localStorageSaveCarItems('shoppingCart', products);
    }
  }

  handleChangeAdd({ target }) {
    const { products } = this.state;
    const result = products.map((el) => {
      if (el.id === target.id && el.amount + 1 <= el.availableQuantity) {
        el.amount += 1;
      }
      return el;
    });
    this.setState({ products: result });
  }

  handleChangeSub({ target }) {
    const { products } = this.state;
    const result = products.map((el) => {
      if (el.id === target.id && el.amount - 1 >= 1) {
        el.amount -= 1;
      }
      return el;
    });
    this.setState({ products: result });
  }

  handleClickDelete({ target }) {
    const { products } = this.state;
    const results = products.filter((el) => el.id !== target.id);
    this.setState({ products: results });
  }

  setLocalStorageState() {
    const results = localStorageLoad('shoppingCart');
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

  renderAddAmountProductCart(id, availableQuantity) {
    return (
      <div>
        <button
          id={ id }
          type="button"
          min="1"
          max={ availableQuantity }
          data-testid="product-increase-quantity"
          onClick={ this.handleChangeAdd }
        >
          +
        </button>
      </div>
    );
  }

  renderSubAmountProductCart(id, availableQuantity) {
    return (
      <div>
        <button
          id={ id }
          type="button"
          min="1"
          max={ availableQuantity }
          data-testid="product-decrease-quantity"
          onClick={ this.handleChangeSub }
        >
          -
        </button>
      </div>
    );
  }

  renderRemoveProductToCart(id) {
    return (
      <div>
        <button
          id={ id }
          type="button"
          onClick={ this.handleClickDelete }
        >
          REMOVER
        </button>
      </div>
    );
  }

  renderBtnCheckout() {
    return (
      <div>
        <Link to="/shoppingcart/checkout">
          <button data-testid="checkout-products" type="button">Finalizar compra</button>
        </Link>
      </div>
    );
  }

  renderTotalPriceProductCart(amount, price) {
    return (
      <div>
        <span>{`Total: R$${(amount * price).toFixed(2)}`}</span>
      </div>
    );
  }

  render() {
    const { products } = this.state;
    if (!products || products.length === 0) {
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
              {this.renderAddAmountProductCart(el.id, el.availableQuantity)}
              {this.renderSubAmountProductCart(el.id, el.availableQuantity)}
              {this.renderRemoveProductToCart(el.id)}
              {this.renderTotalPriceProductCart(el.amount, el.price)}
            </div>
          ))}
        </div>
        { this.renderBtnCheckout()}
      </section>
    );
  }
}

export default ShoppingCart;
