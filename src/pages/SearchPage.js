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
    let { itensOnCart } = this.state;
    if ({}.hasOwnProperty.call(sessionStorage, 'itensOnCart')) {
      itensOnCart = JSON.parse(sessionStorage.getItem('itensOnCart'));
    }
    this.setState(async () => {
      const results = await api.getProductsFromCategoryAndQuery(
        categoryId,
        query,
      );
      this.setState({ products: results.results, itensOnCart });
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
              id={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ `R$ ${product.price}` }
              attributes={ product.attributes }
            />
          ))}
          {!products.length && <p>Nenhum produto foi encontrado</p>}
        </div>
      </div>
    );
  }
}

export default SearchPage;
