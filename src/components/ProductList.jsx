import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import * as api from '../services/api';
import './ProductList.css';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
    };
    this.getResultsFromAPI = this.getResultsFromAPI.bind(this);
  }

  componentDidMount() {
    this.getResultsFromAPI();
  }

  getResultsFromAPI() {
    const { category, query } = this.props;
    this.setState({ isLoading: true }, async () => {
      const products = await api.getProductsFromCategoryAndQuery(
        category,
        query,
      );
      this.setState({
        isLoading: false,
        products,
      });
    });
  }

  render() {
    const { products, isLoading } = this.state;
    const { category, callback } = this.props;
    if (isLoading) {
      return <h2>Loading...</h2>;
    } if (!isLoading && products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div className="product-list-container">
        {isLoading
          ? this.renderLoadingMessage()
          : products.results.map((product) => (
            <ProductCard
              productInfo={ product }
              key={ product.id }
              categoryID={ category }
              callback={ callback }
            />
          ))}
      </div>
    );
  }
}

export default ProductList;

ProductList.propTypes = {
  category: PropTypes.string,
  query: PropTypes.string,
  callback: PropTypes.func.isRequired,
};

ProductList.defaultProps = {
  category: undefined,
  query: undefined,
};
