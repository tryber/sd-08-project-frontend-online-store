import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../components/ProductCard';
import AddItemButton from '../../components/AddItemButton';
import CartButton from '../../components/CartButton';

class ProductDetails extends Component {
  render() {
    const { location: { product, handleAddToCart } } = this.props;
    return (
      <div>
        <CartButton />
        <ProductCard
          handleAddToCart={ handleAddToCart }
          product={ product }
          showDetails={ false }
        >
          <AddItemButton
            data-testid="product-detail-add-to-cart"
            handleAddToCart={ handleAddToCart }
            product={ product }
          />
        </ProductCard>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
    handleAddToCart: PropTypes.func,
  }).isRequired,
};

export default ProductDetails;
