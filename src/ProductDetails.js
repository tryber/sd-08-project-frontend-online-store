import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Rating from './Rating';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      shoppingCart: [],
    };

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(product) {
    const { shoppingCart } = this.state;
    if (!shoppingCart.includes(product)) {
      this.setState({
        shoppingCart: [...shoppingCart, product],
      });
    }
  }

  renderAddButtonCart(product) {
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => this.addItemToCart(product) }
      >
        Adicionar produto ao carrinho
      </button>
    );
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { shoppingCart } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
        <div>
          <h1 data-testid="product-detail-name">
            {product.title}
          </h1>
          <span>R$</span>
          <span>{product.price}</span>
          <span>Quantidade</span>
          <span data-testid="shopping-cart-product-quantity">12</span>
        </div>
        <div>
          <img src={ product.thumbnail } alt={ product.title } />
          <ul>
            <li>{product.attributes[0].value_name}</li>
          </ul>
          <Rating />
          <Link
            to={ {
              pathname: '/',
              search: '?sort=name',
              hash: '#the-hash',
              state: { product },
            } }
            data-testid="product-detail-link"
          />
        </div>
        { this.renderAddButtonCart(product) }
        <Link
          to={ { pathname: '/shopping-cart', state: { shoppingCart } } }
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape(PropTypes.object),
    }),
  }).isRequired,
};

export default ProductDetails;
