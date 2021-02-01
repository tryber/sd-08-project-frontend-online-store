import React from 'react';
import PropTypes from 'prop-types';

import './productCard.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { card, productToCart } = this.props;
    const { title, thumbnail, price, id } = card;
    return (
      <section data-testid="product" className="product-card">
        <Link to={ `/productDetails/${id}` } data-testid="product-detail-link">
          <div>
            <p>{title}</p>
            <img src={ thumbnail } alt={ title } />
            <p>{`R$${price}`}</p>
          </div>
        </Link>
        <button
          type="button"
          onClick={ () => productToCart(card) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho

        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  productToCart: PropTypes.func.isRequired,
};

export default ProductCard;
