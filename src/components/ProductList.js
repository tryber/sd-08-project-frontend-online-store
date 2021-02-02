import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, addToCart, cart } = this.props;
    return (
      <div>
        { products.length === 0
          ? <p>Nenhum produto encontrado.</p>
          : products.map(
            (product) => (
              <ProductCard
                cart={ cart }
                addToCart={ addToCart }
                key={ product.id }
                product={ product }
              />
            ),
          ) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
