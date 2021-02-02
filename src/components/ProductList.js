import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, addToCart, isAvailable } = this.props;
    return (
      <div>
        { products.length === 0
          ? <p>Nenhum produto encontrado.</p>
          : products.map(
            (product) => (
              <ProductCard
                isAvailable={ isAvailable }
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
  isAvailable: PropTypes.func.isRequired,
};

export default ProductList;
