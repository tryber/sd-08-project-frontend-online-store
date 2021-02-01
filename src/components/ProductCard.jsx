import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { productCard } = this.props;
    return (
      <div>
        { productCard.map(({ id, title, thumbnail, price }) => (
          <div key={ id }>
            <Link to={ `/${id}` } data-testid="product-detail-link">
              <div className="card" data-testid="product">
                <h4>
                  { title }
                </h4>
                <img src={ thumbnail } alt={ title } />
                <p>
                  { `R$ ${price}` }
                </p>
              </div>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  productCard: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductCard;
