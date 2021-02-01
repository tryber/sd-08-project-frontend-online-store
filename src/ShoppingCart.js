import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.addProduct = this.addProduct.bind(this);
    this.lessProduct = this.lessProduct.bind(this);
    this.quantityItems = this.quantityItems.bind(this);
  }


  quantityItems(item) {
    const quantity = item.quantity = 1;
    return <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
  }

  addProduct(item) {
    console.log(item)
  }

  lessProduct() {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
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
              onClick={ () => this.lessProduct() }
            >
              -
            </button>
            { this.quantityItems(item) }
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.addProduct(item) }
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
