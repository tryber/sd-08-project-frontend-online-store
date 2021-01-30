import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, query, categoryID } = this.props;
    return (
      <div>
        { products
          .map((product) => (<ProductCard
            key={ product.id }
            product={ product }
            query={ query }
            category={ categoryID }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
  categoryID: PropTypes.string.isRequired,
};

export default ProductList;
