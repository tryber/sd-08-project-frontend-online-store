import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import './SearchPage.css';

class SearchPage extends Component {
  constructor() {
    super();
    this.requestProducts = this.requestProducts.bind(this);
    this.state = {
      products: [],
    };
  }

  requestProducts(categoryId, query) {
    this.setState(async () => {
      const results = await api.getProductsFromCategoryAndQuery(
        categoryId,
        query,
      );
      this.setState({ products: results.results });
    });
  }

  render() {
    const { products } = this.state;
    const { updateItensOnCart } = this.props;
    console.log(products);
    return (
      <div>
        <SearchBar requestProducts={ this.requestProducts } />
        <div className="searchPage-container">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              id={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              availableQuantity={ product.available_quantity }
              price={ `R$ ${product.price}` }
              attributes={ product.attributes }
              freeShipping={ product.shipping.free_shipping }
              updateItensOnCart={ updateItensOnCart }
            />
          ))}
          {!products.length && <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}
SearchPage.propTypes = {
  updateItensOnCart: PropTypes.func.isRequired,
};

export default SearchPage;
