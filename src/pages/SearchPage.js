import React, { Component } from 'react';
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
      const results = categoryId === ''
        ? await api.getProductsFromCategoryAndQuery('ALL', query)
        : await api.getProductsFromCategoryAndQuery(categoryId, query);

      // const results = await api.getProductsFromCategoryAndQuery('ALL', query);
      this.setState({ products: results.results });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <SearchBar requestProducts={ this.requestProducts } />
        <div className="searchPage-container">
          {products.map((product) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ `R$ ${product.price}` }
            />
          ))}
          {!products.length && <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}

export default SearchPage;
