import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  render() {
    const { location: { state } } = this.props;

    return (
      <div className="App">
        { state.length === 0
        && <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio. </p>}
        { state.length > 0
        && state.map((product) => (
          <div key={ product.title } className="card">
            <h4 data-testid="shopping-cart-product-name">
              { product.title }
            </h4>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              { `R$ ${product.price}` }
            </p>
            <p data-testid="shopping-cart-product-quantity">
              { 1 }
            </p>
          </div>))}
        <Link to="/">voltar</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    })),
  }).isRequired,
};

export default ShoppingCart;
