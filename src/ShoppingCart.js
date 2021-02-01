import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = { quantities: {} };

    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.quantityItems = this.quantityItems.bind(this);
  }

  quantityItems(quantity) {
    return quantity;
  }

  addProduct(event, item) {
    const { target: { previousSibling } } = event;
    const { available_quantity } = item;
    if (parseInt(previousSibling.innerText, 10) === available_quantity) return;
    previousSibling.innerText = (parseInt(previousSibling.innerText, 10) + 1).toString();
  }

  lessProduct(event) {
    const { target: { nextSibling } } = event;
    if (nextSibling.innerText === '1') return;
    nextSibling.innerText = (parseInt(nextSibling.innerText, 10) - 1).toString();
  }

  render() {
    const { location: { state: { shoppingCart } } } = this.props;

    if (!shoppingCart.length) {
      return (
        <div>
          <Link to="/">Home</Link>
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        </div>
      );
    }

    return (
      <div>
        <Link to="/">Home</Link>
        {shoppingCart.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">
              { item.title }
            </p>
            <span>Quantidade</span>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ (event) => this.lessProduct(event) }
            >
              -
            </button>
            <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ (event) => this.addProduct(/* event, item */) }
            >
              +
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ShoppingCart;
