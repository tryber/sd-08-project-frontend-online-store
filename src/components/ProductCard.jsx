import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as localStorage from '../services/localStorage';

class ProductCard extends React.Component {
  render() {
    const { productsCard, addToCar } = this.props;
    return (
      <div>
        { productsCard.map((product) => (
          <div key={ product.id }>
            <Link
              to={ {
                pathname: `/productDetails/${product.id}`,
                state: {
                  id: product.id,
                  title: product.title,
                  thumbnail: product.thumbnail,
                  price: product.price,
                } } }
              data-testid="product-detail-link"
            >
              <div className="card" data-testid="product">
                <h4>
                  { product.title }
                </h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>
                  { `R$ ${product.price}` }
                </p>
              </div>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => {
                localStorage.addToCart(product);
                addToCar();
              } }
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
  productsCard: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCar: PropTypes.func.isRequired,
};

export default ProductCard;
