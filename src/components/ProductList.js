import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    const { query, categoryID } = this.props;
    this.state = {
      productInfo: {
        querySearched: query,
        category: categoryID,
      }
    }
  }
  render() {
    const { products } = this.props;
    const { productInfo } = this.state;
    return (
      <div>
        { products
          .map((product) => <ProductCard key={ product.id } product={ product } productInfo={ productInfo } />) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
