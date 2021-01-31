import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import ShoppingCartLink from '../components/ShoppingCartLink';

class ProductDetails extends Component {
  render() {
    const { location: { state: { productObj } } } = this.props;
    const { attributes } = productObj;
    return (
      <div>
        <ShoppingCartLink />
        <div data-testid="product-detail-name">
          <ProductCard product={ productObj } />
        </div>
        <div>
          <ul>
            Especificações Técnicas
            {attributes.map((attribute) => (
              <li
                key={ attribute.id }
              >
                {`${attribute.name}: ${attribute.value_name}`}
              </li>))}
          </ul>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      productObj: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
