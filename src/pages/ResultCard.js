import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ResultCard extends React.Component {
  render() {
    const { product, addProduct } = this.props;

    return (
      <section>
        <Link
          to={ {
            pathname: `/products-details/${product.id}`,
            state: {
              product,
            },
          } }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h1>{product.title}</h1>
            <img src={ product.thumbnail } alt="Product pic " />
            <p>{product.price}</p>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => addProduct(product) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ResultCard.propTypes = {
  product: PropTypes.objectOf(Object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ResultCard;
