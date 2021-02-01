import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as cartApi from '../services/localStorage';

class CardProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="cards-container">
        { products.map((product) => (
          <div key={ product.id }>
            <div className="card" data-testid="product">
              <Link to={ `/${product.id}` } data-testid="product-detail-link">
                <img src={ product.thumbnail } alt={ product.title } />
                <h2>
                  R$
                  { product.price }
                </h2>
                <p>
                  { product.title }
                </p>
              </Link>
              <button
                type="button"
                className="add-to-cart-button"
                data-testid="product-add-to-cart"
                onClick={ () => cartApi.addToCart(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

CardProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};

export default CardProducts;
