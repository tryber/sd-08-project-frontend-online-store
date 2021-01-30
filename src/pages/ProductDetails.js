import React, { Component } from 'react';
import Proptypes from 'prop-types';
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
            {attributes.map((atributte) => (
              <li
                key={ atributte.value_id }
              >
                {`${atributte.name}: ${atributte.value_name}`}
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
  location: Proptypes.shape({
    state: Proptypes.shape({
      productObj: Proptypes.shape({
        attributes: Proptypes.arrayOf(),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
