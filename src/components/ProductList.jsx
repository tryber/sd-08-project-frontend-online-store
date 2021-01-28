import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
    };
    this.getResultsFromAPI = this.getResultsFromAPI.bind(this);
  }

  getResultsFromAPI(category, query) {
    this.setState({ isLoading: true }, async () => {
      const allProducts = await api.getProductsFromCategoryAndQuery(
        category,
        query,
      );
      this.setState({
        isLoading: false,
        products: allProducts,
      });
    });
  }

  renderLoadingMessage() {
    return <h2>Loading...</h2>;
  }

  render() {
    const { filters } = this.props;
    const { category, query } = filters;
    this.getResultsFromAPI(category, query);
    const { products, isLoading } = this.state;
    return (
      <div>
        {isLoading
          ? this.renderLoadingMessage()
          : products.map((product) => (
            <ProductCard productInfo={ product } key={ product.id } />
          ))}
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  filters: PropTypes.shape({
    category: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
};
