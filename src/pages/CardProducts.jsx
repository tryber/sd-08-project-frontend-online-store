import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardProducts extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div className="cards-container">
        {products.map(({ id, title, thumbnail, price }) => (
          <div className="card" key={ id } data-testid="product">
            <Link to={ `/${id}` } data-testid="product-detail-link">
              <img src={ thumbnail } alt={ title } />
              <h2>R${ price }</h2>
              <p>{ title }</p>
            </Link>

            <button
              className="add-to-cart-button"
              data-testid="product-detail-add-to-cart"
            >
              Adicionar ao carrinho
            </button>
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
